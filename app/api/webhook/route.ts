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

        // For digital art, we need to:
        // 1. Save the order to your database
        // 2. Send confirmation email with download links
        // 3. Notify artists about new sales
        // 4. Track download analytics

        console.log("Payment successful for session:", session.id)
        console.log("Customer email:", session.customer_details?.email)
        console.log("Amount total:", session.amount_total)
        console.log("Order type:", session.metadata?.order_type)
        console.log("Product IDs:", session.metadata?.product_ids)

        // In a real implementation, you would:
        // - Save order to database
        // - Send email with download links
        // - Update artist earnings
        // - Track analytics

        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log("PaymentIntent succeeded:", paymentIntent.id)
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
