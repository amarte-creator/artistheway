"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/products"
import { Clock, AlertCircle } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      artist: product.artist,
    })
  }

  return (
    <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 glass relative">
      {/* Urgency Badges */}
      <div className="absolute top-3 left-3 z-10 space-y-2">
        {product.isLimited && (
          <Badge className="bg-red-500 text-white border-0 text-xs">
            <AlertCircle className="h-3 w-3 mr-1" />
            Limited Edition
          </Badge>
        )}
        {product.stockCount && product.stockCount <= 5 && (
          <Badge className="bg-orange-500 text-white border-0 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            Only {product.stockCount} left
          </Badge>
        )}
      </div>

      <Link href={`/shop/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Link href={`/shop/${product.id}`}>
            <h3 className="font-serif text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">by {product.artist}</p>
            <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full capitalize">
              {product.category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
        
        {/* Pricing with discount */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold text-[#3e6b48]">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
                <Badge className="bg-green-100 text-green-800 border-0 text-xs">
                  Save ${product.originalPrice - product.price}
                </Badge>
              </>
            )}
          </div>
          
          {/* Stock urgency */}
          {product.stockCount && product.stockCount <= 3 && (
            <p className="text-xs text-red-600 font-medium flex items-center">
              <AlertCircle className="h-3 w-3 mr-1" />
              Hurry! Only {product.stockCount} remaining
            </p>
          )}
        </div>

        <Button size="sm" className="rounded-xl w-full" onClick={handleAddToCart}>
          {product.stockCount === 1 ? "Secure This Piece" : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  )
}
