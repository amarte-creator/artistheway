import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/artistheway-logo.png" alt="Artistheway" width={32} height={32} className="h-8 w-8" />
              <span className="font-serif text-lg font-bold">Artistheway</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting the world with authentic Chapaco paintings and photography from Tarija, Bolivia.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Gallery</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  All Artworks
                </Link>
              </li>
              <li>
                <Link href="/shop?category=paintings" className="hover:text-primary transition-colors">
                  Paintings
                </Link>
              </li>
              <li>
                <Link href="/shop?category=photography" className="hover:text-primary transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/shop?featured=true" className="hover:text-primary transition-colors">
                  Featured Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/artists" className="hover:text-primary transition-colors">
                  Our Artists
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-primary transition-colors">
                  Chapaco Heritage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-primary transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Artistheway. All rights reserved. Made with love for Chapaco artistic heritage.</p>
        </div>
      </div>
    </footer>
  )
}
