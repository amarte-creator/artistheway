import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/artistheway-logo.png" alt="Artistheway" width={40} height={40} className="h-10 w-10" />
          <span className="font-serif text-xl font-bold text-foreground">Artistheway</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/artists" className="text-sm font-medium hover:text-primary transition-colors">
            Our Artists
          </Link>
          <Link href="/heritage" className="text-sm font-medium hover:text-primary transition-colors">
            Chapaco Heritage
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-xs text-slate-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <span>4.9/5</span>
          </div>
          <CartSheet />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
