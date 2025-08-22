import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { featuredProducts } from "@/lib/products"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3e6b48]/10 via-transparent to-[#6a3b83]/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Where Tradition
                <span className="block text-[#3e6b48]">Meets Artistry</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From the fertile valleys of Tarija, Bolivia, discover authentic Chapaco art that carries the soul of our
                ancestors. Each piece tells a story of tradition, resilience, and the timeless beauty of our culture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-2xl px-8 py-6 text-lg bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                  <Link href="/shop">Explore Collection</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-lg border-[#3e6b48] text-[#3e6b48] hover:bg-[#3e6b48]/10 bg-transparent"
                >
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Featured Artworks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked pieces that showcase the finest of Chapaco craftsmanship and artistic expression.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 bg-transparent">
                <Link href="/shop">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Preserving Chapaco Heritage</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the heart of Tarija's valleys, where the earth is rich and the traditions run deep, our artisans
                  continue practices passed down through generations. Every piece in our collection represents not just
                  art, but a living connection to our Chapaco identity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the clay shaped by hands that know the ancient ways, to textiles woven with patterns that tell
                  our stories, each artwork carries the essence of our land and people.
                </p>
                <Button asChild className="rounded-2xl bg-[#6a3b83] hover:bg-[#6a3b83]/90">
                  <Link href="/about">Learn More About Our Mission</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                  <img
                    src="/tarija-artisans.png"
                    alt="Artisans working in Tarija valley"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Meet Our Artists</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented hands and creative minds behind every piece in our collection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "María Gonzalez",
                  specialty: "Ceramic Artist",
                  image: "/bolivian-ceramic-artist.png",
                  description: "Third-generation potter specializing in traditional Chapaco ceramic techniques.",
                },
                {
                  name: "Carlos Mendoza",
                  specialty: "Textile Weaver",
                  image: "/bolivian-weaver-portrait.png",
                  description: "Master weaver preserving ancient patterns and natural dyeing methods.",
                },
                {
                  name: "Ana Rodriguez",
                  specialty: "Painter",
                  image: "/bolivian-female-painter.png",
                  description: "Contemporary artist capturing the landscapes and spirit of Tarija.",
                },
              ].map((artist, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="aspect-square w-48 mx-auto rounded-full overflow-hidden glass">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-semibold">{artist.name}</h3>
                    <p className="text-[#6a3b83] font-medium">{artist.specialty}</p>
                    <p className="text-muted-foreground">{artist.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
