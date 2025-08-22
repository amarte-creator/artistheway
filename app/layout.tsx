import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import Script from "next/script"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Artistheway - Authentic Chapaco Art from Tarija",
  description:
    "Discover and purchase authentic Chapaco art directly from talented artists in Tarija, Bolivia. Each piece tells a story of tradition, culture, and craftsmanship.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
