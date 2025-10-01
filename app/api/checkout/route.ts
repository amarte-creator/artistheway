import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    // Validaciones mejoradas
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    // Validar que todos los items tengan los campos requeridos
    for (const item of items) {
      if (!item.id || !item.name || !item.price || !item.quantity) {
        return NextResponse.json({ 
          error: "Invalid item data. Missing required fields." 
        }, { status: 400 })
      }
      
      if (item.price <= 0 || item.quantity <= 0) {
        return NextResponse.json({ 
          error: "Invalid price or quantity. Must be greater than 0." 
        }, { status: 400 })
      }
    }

    // Verificar que las claves de Stripe estén configuradas
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY not configured")
      return NextResponse.json({ 
        error: "Payment system not configured" 
      }, { status: 500 })
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: `Handcrafted by ${item.artist}`,
          images: [item.image.startsWith("http") ? item.image : `${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }))

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
      // Configuración para productos digitales
      payment_intent_data: {
        metadata: {
          order_type: "digital_art",
          product_ids: items.map((item: any) => item.id).join(','),
        },
      },
      metadata: {
        order_type: "digital_art",
        product_ids: items.map((item: any) => item.id).join(','),
        total_amount: items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0).toString(),
      },
      // Configuración de facturación automática para productos digitales
      billing_address_collection: "auto",
      // Configuración de impuestos (opcional)
      automatic_tax: {
        enabled: false, // Cambiar a true si quieres calcular impuestos automáticamente
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    
    // Manejo de errores más específico
    if (error instanceof Error) {
      if (error.message.includes("Invalid API Key")) {
        return NextResponse.json({ 
          error: "Payment system configuration error" 
        }, { status: 500 })
      }
      
      if (error.message.includes("amount_too_small")) {
        return NextResponse.json({ 
          error: "Amount too small for processing" 
        }, { status: 400 })
      }
    }
    
    return NextResponse.json({ 
      error: "Failed to create checkout session. Please try again." 
    }, { status: 500 })
  }
}
