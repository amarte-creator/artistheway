"use client"

import React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2, AlertCircle } from "lucide-react"
import { getProductById, products } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = React.use(params)
  const product = getProductById(id)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const availabilityColors = {
    "in-stock": "bg-green-100 text-green-800",
    limited: "bg-yellow-100 text-yellow-800",
    "sold-out": "bg-red-100 text-red-800",
  }

  const availabilityText = {
    "in-stock": "In Stock",
    limited: "Limited Availability",
    "sold-out": "Sold Out",
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artist: product.artist,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/shop"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl glass">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={`${availabilityColors[product.availability]} border-0`}>
                    {availabilityText[product.availability]}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl font-bold">{product.name}</h1>
                <p className="text-lg text-muted-foreground">by {product.artist}</p>
                <p className="font-serif text-3xl font-bold text-[#3e6b48]">${product.price}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">The Story</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.story}</p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Dimensions</h4>
                    <p className="text-muted-foreground">{product.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Materials</h4>
                    <p className="text-muted-foreground">{product.materials}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">About the Artist</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.artistBio}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Urgency messaging */}
                {product.stockCount && product.stockCount <= 3 && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-red-700">
                      <AlertCircle className="h-5 w-5" />
                      <span className="font-semibold">
                        {product.stockCount === 1 
                          ? "Last one available!" 
                          : `Only ${product.stockCount} left in stock!`
                        }
                      </span>
                    </div>
                    <p className="text-sm text-red-600 mt-1">
                      This piece is in high demand. Secure yours now before it's gone.
                    </p>
                  </div>
                )}

                {/* Pricing with discount */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-serif text-2xl font-bold text-[#3e6b48]">${product.price}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
                            <Badge className="bg-green-500 text-white border-0">
                              Save ${product.originalPrice - product.price}
                            </Badge>
                          </>
                        )}
                      </div>
                      <p className="text-sm text-green-700 font-medium">
                        {product.originalPrice ? "Limited Time Offer" : "Special Price"}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90 text-lg py-6 font-semibold"
                  disabled={product.availability === "sold-out"}
                  onClick={handleAddToCart}
                >
                  {product.availability === "sold-out" 
                    ? "Sold Out" 
                    : product.stockCount === 1 
                      ? "Secure This Last Piece" 
                      : "Add to My Collection"
                  }
                </Button>

                {/* Trust indicators */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Free worldwide shipping</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>30-day guarantee</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Handcrafted with love in Tarija, Bolivia. Supporting local Chapaco artists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16 pt-16 border-t">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter(p => p.id !== product.id && (p.artist === product.artist || p.category === product.category))
                .slice(0, 3)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className="group">
                    <Link href={`/shop/${relatedProduct.id}`}>
                      <div className="aspect-square overflow-hidden rounded-xl mb-4">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="space-y-2">
                      <Link href={`/shop/${relatedProduct.id}`}>
                        <h3 className="font-serif text-lg font-semibold hover:text-primary transition-colors">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground">by {relatedProduct.artist}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-bold text-[#3e6b48]">
                          ${relatedProduct.price}
                          {relatedProduct.originalPrice && (
                            <span className="text-sm text-slate-500 line-through ml-2">
                              ${relatedProduct.originalPrice}
                            </span>
                          )}
                        </span>
                        <Button size="sm" className="rounded-xl">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            {products.filter(p => p.id !== product.id && (p.artist === product.artist || p.category === product.category)).length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <p>More artworks from our collection coming soon...</p>
                <Button asChild className="mt-4 rounded-xl">
                  <Link href="/shop">Browse All Artworks</Link>
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
