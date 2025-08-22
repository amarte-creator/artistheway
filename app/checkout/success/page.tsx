"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const { clearCart } = useCart()
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    // Clear the cart after successful checkout
    if (sessionId) {
      clearCart()

      // In a real app, you would fetch order details from your API
      // For now, we'll show a generic success message
      setOrderDetails({
        id: sessionId,
        email: "customer@example.com", // This would come from Stripe session
      })
    }
  }, [sessionId, clearCart])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold">Order Confirmed!</h1>
              <p className="text-lg text-muted-foreground">
                Thank you for supporting Chapaco artists. Your order has been received and is being prepared with care.
              </p>
            </div>

            {orderDetails && (
              <div className="bg-muted/30 rounded-2xl p-8 space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-xl font-semibold">What happens next?</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-[#3e6b48]" />
                        <span className="font-semibold">Confirmation Email</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You'll receive an order confirmation email shortly with all the details.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Package className="h-5 w-5 text-[#6a3b83]" />
                        <span className="font-semibold">Careful Packaging</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Each piece is carefully wrapped and prepared for its journey to you.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="h-5 w-5 text-[#f2a65a]" />
                        <span className="font-semibold">Free Shipping</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your art will arrive in 7-14 business days with free worldwide shipping.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Order ID: <span className="font-mono">{sessionId}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to your email address.
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Continue Exploring</h3>
              <p className="text-muted-foreground">
                Discover more beautiful Chapaco art and support our talented artists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl bg-transparent">
                  <Link href="/about">Learn About Our Artists</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
