import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
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
      shipping_address_collection: {
        allowed_countries: [
          "US",
          "CA",
          "GB",
          "AU",
          "DE",
          "FR",
          "ES",
          "IT",
          "NL",
          "BE",
          "AT",
          "CH",
          "SE",
          "NO",
          "DK",
          "FI",
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0, // Free shipping
              currency: "usd",
            },
            display_name: "Free Worldwide Shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 7,
              },
              maximum: {
                unit: "business_day",
                value: 14,
              },
            },
          },
        },
      ],
      metadata: {
        order_type: "chapaco_art",
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
