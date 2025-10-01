"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Plus, Minus, X, Loader2 } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"

export function CartSheet() {
  const { items, total, itemCount, updateQuantity, removeItem } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = async () => {
    if (items.length === 0) return

    setIsCheckingOut(true)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error("Checkout error:", data.error)
        
        // Manejo de errores más específico
        if (data.error.includes("configuration")) {
          alert("El sistema de pagos no está configurado correctamente. Por favor contacta al soporte.")
        } else if (data.error.includes("too small")) {
          alert("El monto es muy pequeño para procesar. Por favor agrega más productos.")
        } else if (data.error.includes("Invalid item data")) {
          alert("Hay un problema con los productos en tu carrito. Por favor recarga la página.")
        } else {
          alert(`Error al procesar el pago: ${data.error}`)
        }
        return
      }

      const { sessionId } = data

      if (!sessionId) {
        alert("No se pudo crear la sesión de pago. Por favor intenta de nuevo.")
        return
      }

      // Verificar que Stripe esté cargado
      if (typeof window !== 'undefined' && (window as any).Stripe) {
        const stripe = (window as any).Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
        
        if (!stripe) {
          alert("Error al cargar el sistema de pagos. Por favor recarga la página.")
          return
        }

        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId,
        })

        if (stripeError) {
          console.error("Stripe redirect error:", stripeError)
          
          // Manejo de errores específicos de Stripe
          if (stripeError.type === 'card_error') {
            alert("Error con la tarjeta: " + stripeError.message)
          } else if (stripeError.type === 'validation_error') {
            alert("Error de validación: " + stripeError.message)
          } else {
            alert("Error al procesar el pago: " + stripeError.message)
          }
        }
      } else {
        alert("El sistema de pagos no está disponible. Por favor recarga la página.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Ocurrió un error inesperado. Por favor intenta de nuevo.")
    } finally {
      setIsCheckingOut(false)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-serif">Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="font-serif text-lg font-semibold">Your cart is empty</h3>
                  <p className="text-muted-foreground">Add some beautiful Chapaco art to get started</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto py-4 md:py-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden glass">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-serif font-semibold text-sm line-clamp-2">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">by {item.artist}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={() => removeItem(item.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 rounded-full bg-transparent"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-serif font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 md:pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg font-semibold">Total</span>
                  <span className="font-serif text-xl font-bold text-[#3e6b48]">${total.toFixed(2)}</span>
                </div>
                <Separator />
                <Button
                  className="w-full rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90 text-lg py-6"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">Free shipping worldwide on all orders</p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
