import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")!

    // Verificar que el webhook secret esté configurado
    if (!webhookSecret) {
      console.error("STRIPE_WEBHOOK_SECRET not configured")
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session

        console.log("Payment successful for session:", session.id)
        console.log("Customer email:", session.customer_details?.email)
        console.log("Amount total:", session.amount_total)
        console.log("Order type:", session.metadata?.order_type)
        console.log("Product IDs:", session.metadata?.product_ids)

        // En producción, aquí deberías:
        // 1. Guardar la orden en tu base de datos
        // 2. Enviar email de confirmación con enlaces de descarga
        // 3. Notificar a los artistas sobre nuevas ventas
        // 4. Actualizar estadísticas de ventas
        // 5. Generar enlaces de descarga seguros

        // Ejemplo de implementación básica:
        try {
          // Aquí podrías llamar a tu servicio de email
          // await sendOrderConfirmationEmail(session.customer_details?.email, session)
          
          // Aquí podrías guardar en tu base de datos
          // await saveOrderToDatabase(session)
          
          console.log("Order processed successfully:", session.id)
        } catch (processingError) {
          console.error("Error processing order:", processingError)
          // En producción, podrías enviar una notificación de error
        }

        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log("PaymentIntent succeeded:", paymentIntent.id)
        break

      case "payment_intent.payment_failed":
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log("Payment failed:", failedPayment.id, failedPayment.last_payment_error?.message)
        break

      case "invoice.payment_succeeded":
        // Para suscripciones recurrentes (si las implementas en el futuro)
        const invoice = event.data.object as Stripe.Invoice
        console.log("Invoice payment succeeded:", invoice.id)
        break

      case "customer.subscription.created":
        // Para suscripciones (si las implementas en el futuro)
        const subscription = event.data.object as Stripe.Subscription
        console.log("Subscription created:", subscription.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
