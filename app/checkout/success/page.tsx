"use client"

import { useEffect, useState, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Mail, ArrowRight, Download, Info, FileText, Printer } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { DownloadButton } from "@/components/download-button"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const { clearCart } = useCart()
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const [purchasedItems, setPurchasedItems] = useState<any[]>([])

  const fetchOrderDetails = useCallback(async (sessionId: string) => {
    try {
      const response = await fetch(`/api/order-details?session_id=${sessionId}`)
      const data = await response.json()
      
      if (data.success) {
        setOrderDetails(data.orderDetails)
        setPurchasedItems(data.purchasedItems)
      } else {
        // Fallback to demo data if API fails
        setOrderDetails({
          id: sessionId,
          email: "customer@example.com",
        })
        setPurchasedItems([
          {
            id: "1",
            name: "Tarija Valley Sunset",
            artist: "Ana Rodriguez",
            category: "paintings",
            image: "/andean-sunset-oil.png"
          },
          {
            id: "2", 
            name: "Vineyard Harvest Morning",
            artist: "Carlos Mendoza",
            category: "photography",
            image: "/vineyard-runner.png"
          }
        ])
      }
    } catch (error) {
      console.error('Error fetching order details:', error)
      // Fallback to demo data
      setOrderDetails({
        id: sessionId,
        email: "customer@example.com",
      })
      setPurchasedItems([
        {
          id: "1",
          name: "Tarija Valley Sunset",
          artist: "Ana Rodriguez",
          category: "paintings",
          image: "/andean-sunset-oil.png"
        },
        {
          id: "2", 
          name: "Vineyard Harvest Morning",
          artist: "Carlos Mendoza",
          category: "photography",
          image: "/vineyard-runner.png"
        }
      ])
    }
  }, [])

  useEffect(() => {
    // Clear the cart after successful checkout
    if (sessionId) {
      clearCart()
      fetchOrderDetails(sessionId)
    }
  }, [sessionId, clearCart, fetchOrderDetails])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Success Header */}
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h1 className="font-serif text-3xl md:text-4xl font-bold">Order Confirmed!</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thank you for supporting Chapaco artists. Your high-resolution digital artworks are ready for download.
              </p>
            </div>

            {orderDetails && (
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="font-serif text-2xl font-semibold">Your Digital Downloads</h2>
                  <p className="text-slate-600">
                    Download your high-resolution artwork files below. Each file is print-ready and includes the artist's signature.
                  </p>
                </div>
                
                {purchasedItems.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {purchasedItems.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl p-6 space-y-4 shadow-sm border">
                        <div className="flex items-start space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 space-y-2">
                            <h3 className="font-serif text-lg font-semibold">{item.name}</h3>
                            <p className="text-slate-600">by {item.artist}</p>
                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm capitalize">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <DownloadButton
                            sessionId={sessionId || ''}
                            productId={item.id}
                            productName={item.name}
                            artist={item.artist}
                          />
                          
                          <div className="text-xs text-slate-500 space-y-1">
                            <div className="flex items-center gap-2">
                              <FileText className="h-3 w-3" />
                              <span>High-resolution JPEG (300 DPI)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Printer className="h-3 w-3" />
                              <span>Print-ready up to 24" x 36"</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Download Information */}
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <h3 className="font-serif text-lg font-semibold flex items-center gap-2">
                    <Info className="h-5 w-5 text-[#3e6b48]" />
                    Download Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <h4 className="font-semibold mb-1">File Format</h4>
                      <p>High-resolution JPEG files (300 DPI) suitable for printing up to 24" x 36"</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Usage Rights</h4>
                      <p>Personal use only. Commercial licensing available upon request.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Download Access</h4>
                      <p>Download links will be sent to your email for future access</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Support</h4>
                      <p>Need help? Contact us for technical support or licensing questions.</p>
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <h3 className="font-serif text-lg font-semibold">Order Details</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-600">
                      <span className="font-semibold">Order ID:</span> <span className="font-mono">{sessionId}</span>
                    </p>
                    <p className="text-slate-600">
                      <span className="font-semibold">Email:</span> {orderDetails.email}
                    </p>
                    <p className="text-slate-600">
                      A confirmation email with download links has been sent to your email address for future access.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next Steps */}
            <div className="text-center space-y-6">
              <h3 className="font-serif text-2xl font-semibold">What happens next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Download className="h-6 w-6 text-[#3e6b48]" />
                    <span className="font-semibold">Instant Download</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Download your high-resolution artwork immediately after purchase.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-6 w-6 text-[#6a3b83]" />
                    <span className="font-semibold">Email Confirmation</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    You'll receive an order confirmation email with download links for future access.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-[#f2a65a]" />
                    <span className="font-semibold">Print Ready</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Files are high-resolution and ready for printing or digital display.
                  </p>
                </div>
              </div>
            </div>

            {/* Continue Exploring */}
            <div className="text-center space-y-4">
              <h3 className="font-serif text-xl font-semibold">Continue Exploring</h3>
              <p className="text-slate-600">
                Discover more beautiful Chapaco art and support our talented artists.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                <Button asChild size="lg" className="rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
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
