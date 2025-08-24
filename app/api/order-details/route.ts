import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getProductById } from "@/lib/products"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json({ error: "Session ID is required" }, { status: 400 })
    }

    // Retrieve the Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    })

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 })
    }

    // Get line items from the session
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)
    
    // Map line items to our product data
    const purchasedItems = lineItems.data.map((item) => {
      // Find the product by name (in a real app, you'd store product IDs in metadata)
      const productName = item.price?.product_data?.name || item.description || ""
      
      // For demo purposes, we'll map based on product names
      let productId = "1" // default
      if (productName.includes("Tarija Valley Sunset")) productId = "1"
      else if (productName.includes("Vineyard Harvest")) productId = "2"
      else if (productName.includes("Valley Flowers")) productId = "3"
      else if (productName.includes("Chapaco Village")) productId = "4"
      else if (productName.includes("Mountain Spirit")) productId = "5"
      else if (productName.includes("Condor Flight")) productId = "6"
      else if (productName.includes("Artisan Portrait")) productId = "7"
      else if (productName.includes("Sacred Geometry")) productId = "8"
      else if (productName.includes("Weaver's Hands")) productId = "9"
      else if (productName.includes("Valley Mist")) productId = "10"
      else if (productName.includes("Traditional Wedding")) productId = "11"
      else if (productName.includes("Ancestral Memory")) productId = "12"

      const product = getProductById(productId)
      
      return {
        id: productId,
        name: product?.name || productName,
        artist: product?.artist || "Unknown Artist",
        category: product?.category || "artwork",
        image: product?.image || "/placeholder.svg",
        quantity: item.quantity || 1,
        price: item.amount_total ? item.amount_total / 100 : 0,
      }
    })

    const orderDetails = {
      id: session.id,
      email: session.customer_details?.email || "customer@example.com",
      amount_total: session.amount_total ? session.amount_total / 100 : 0,
      currency: session.currency?.toUpperCase() || "USD",
      status: session.payment_status,
      created: session.created,
    }

    return NextResponse.json({
      success: true,
      orderDetails,
      purchasedItems,
    })

  } catch (error) {
    console.error("Error fetching order details:", error)
    return NextResponse.json({ 
      success: false, 
      error: "Failed to fetch order details" 
    }, { status: 500 })
  }
}
