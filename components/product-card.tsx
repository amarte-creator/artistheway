"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/products"

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
    <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 glass">
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
          <p className="text-sm text-muted-foreground">by {product.artist}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-bold">${product.price}</span>
          <Button size="sm" className="rounded-xl" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
