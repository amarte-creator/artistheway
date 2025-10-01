import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import { ExitIntentProvider } from "@/components/exit-intent-provider"
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
  icons: {
    icon: [
      {
        url: "/images/artistheway-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/artistheway-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/artistheway-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/images/artistheway-logo.png" />
        <link rel="apple-touch-icon" href="/images/artistheway-logo.png" />
        <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      </head>
      <body>
        <CartProvider>
          <ExitIntentProvider>
            {children}
          </ExitIntentProvider>
        </CartProvider>
      </body>
    </html>
  )
}
