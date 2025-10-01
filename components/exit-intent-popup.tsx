"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift, Star } from "lucide-react"

interface ExitIntentPopupProps {
  onClose: () => void
}

export function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSuccess(true)
    setIsSubmitting(false)
    
    // Close popup after 2 seconds
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Star className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-800">Welcome!</h3>
          <p className="text-slate-600">
            Check your email for your exclusive 15% discount code. Valid for 7 days!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3e6b48] to-[#6a3b83] rounded-full flex items-center justify-center mx-auto">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-800">
            Wait! Don't Miss Out
          </h3>
          <p className="text-slate-600">
            Get <span className="font-bold text-[#3e6b48]">15% OFF</span> your first purchase when you subscribe to our newsletter.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3e6b48] focus:border-transparent"
              required
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full rounded-xl bg-[#3e6b48] hover:bg-[#3e6b48]/90 text-lg py-3"
          >
            {isSubmitting ? "Subscribing..." : "Get My 15% Discount"}
          </Button>
          
          <p className="text-xs text-slate-500 text-center">
            Join 500+ art lovers who get exclusive offers and artist stories delivered to their inbox.
          </p>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>200+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function useExitIntent() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    let hasShownPopup = false

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving the top of the page
      if (e.clientY <= 0 && !hasShownPopup) {
        hasShownPopup = true
        setShowPopup(true)
      }
    }

    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('artistheway-exit-popup-seen')
    if (hasSeenPopup) {
      return
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false)
    localStorage.setItem('artistheway-exit-popup-seen', 'true')
  }

  return {
    showPopup,
    closePopup
  }
}
