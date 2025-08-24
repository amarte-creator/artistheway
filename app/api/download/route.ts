import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getProductById } from "@/lib/products"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const { sessionId, productId } = await request.json()

    if (!sessionId || !productId) {
      return NextResponse.json({ error: "Missing session ID or product ID" }, { status: 400 })
    }

    // Verify the purchase with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: "Payment not completed" }, { status: 403 })
    }

    // Get product details
    const product = getProductById(productId)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Check if this product was actually purchased in this session
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId)
    const purchasedProduct = lineItems.data.find(item => 
      item.price?.product_data?.name === product.name
    )

    if (!purchasedProduct) {
      return NextResponse.json({ error: "Product not found in this order" }, { status: 403 })
    }

    // Generate download URL (in a real app, this would point to your CDN or storage)
    const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/download-file/${productId}`
    
    // In a real implementation, you might:
    // 1. Generate a signed URL for secure download
    // 2. Track download analytics
    // 3. Send download notification email
    // 4. Update download count in database

    return NextResponse.json({ 
      downloadUrl,
      productName: product.name,
      artist: product.artist,
      message: "Download ready! Your high-resolution artwork is available."
    })

  } catch (error) {
    console.error("Download verification error:", error)
    return NextResponse.json({ error: "Failed to verify download" }, { status: 500 })
  }
}
