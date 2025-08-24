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
        {/* Hero Section with Background Images */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Desktop Background */}
          <div className="absolute inset-0 hidden md:block">
            <img
              src="/images/artistheway-hero-bg.png"
              alt="Tarija Valley Landscape"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          {/* Mobile Background */}
          <div className="absolute inset-0 md:hidden">
            <img
              src="/images/artistheway-bg-sq.jpg"
              alt="Tarija Valley Landscape"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Where Art
                <span className="block text-white drop-shadow-lg relative">
                  <span className="absolute inset-0 text-[#3e6b48] blur-sm opacity-80">Meets Heritage</span>
                  <span className="relative z-10 text-white">Meets Heritage</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Discover authentic paintings and photography from the fertile valleys of Tarija, Bolivia. 
                Each piece captures the soul of our ancestors and the timeless beauty of Chapaco culture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-2xl px-8 py-6 text-lg bg-[#3e6b48] hover:bg-[#3e6b48]/90 text-white">
                  <Link href="/shop">Explore Collection</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-lg border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artworks Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">Featured Artworks</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Handpicked paintings and photography that showcase the finest of Chapaco artistic expression and cultural heritage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 bg-white border-slate-300 hover:bg-slate-50">
                <Link href="/shop">View All Artworks</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Art Categories Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">Explore Our Collections</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover the diverse artistic expressions of Tarija through our curated collections of paintings and photography.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Paintings Category */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/valley-flowers-painting.png"
                    alt="Paintings Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2">Paintings</h3>
                    <p className="text-white/90 mb-4">
                      Original paintings that capture the essence of Tarija's landscapes and cultural heritage through vibrant colors and masterful techniques.
                    </p>
                    <Button asChild className="bg-white text-slate-800 hover:bg-white/90">
                      <Link href="/paintings">Explore Paintings</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Photography Category */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/tarija-artisans.png"
                    alt="Photography Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-2">Photography</h3>
                    <p className="text-white/90 mb-4">
                      Documentary photography that preserves the traditions, daily life, and breathtaking landscapes of the Chapaco region.
                    </p>
                    <Button asChild className="bg-white text-slate-800 hover:bg-white/90">
                      <Link href="/photography">Explore Photography</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">Preserving Chapaco Heritage Through Art</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  In the heart of Tarija's valleys, where the earth is rich and the traditions run deep, our artists 
                  continue to capture the essence of our culture through paintings and photography. Every piece in our 
                  collection represents not just art, but a living connection to our Chapaco identity.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From the vibrant landscapes painted with colors that mirror our valleys, to photographs that document 
                  the daily life and traditions of our people, each artwork carries the essence of our land and heritage.
                </p>
                <Button asChild className="rounded-2xl bg-[#6a3b83] hover:bg-[#6a3b83]/90 text-white">
                  <Link href="/about">Learn More About Our Mission</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
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

        {/* Artists Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">Meet Our Artists</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The talented hands and creative minds behind every painting and photograph in our collection.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ana Rodriguez",
                  specialty: "Painter",
                  image: "/bolivian-female-painter.png",
                  description: "Contemporary artist capturing the landscapes and spirit of Tarija through vibrant oil and watercolor paintings.",
                },
                {
                  name: "Carlos Mendoza",
                  specialty: "Photographer",
                  image: "/bolivian-ceramic-artist.png",
                  description: "Documentary photographer preserving ancient traditions and daily life through intimate portraits and landscapes.",
                },
                {
                  name: "María Gonzalez",
                  specialty: "Mixed Media Artist",
                  image: "/bolivian-weaver-portrait.png",
                  description: "Contemporary artist exploring themes of cultural heritage through photography and mixed media works.",
                },
              ].map((artist, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="aspect-square w-48 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-semibold text-slate-800">{artist.name}</h3>
                    <p className="text-[#6a3b83] font-medium">{artist.specialty}</p>
                    <p className="text-slate-600">{artist.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#3e6b48] to-[#6a3b83] text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Bring Chapaco Art Into Your Home</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Each painting and photograph tells a story of tradition, resilience, and the timeless beauty of our culture. 
                Start your collection today and become part of our artistic heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="rounded-2xl px-8 py-6 text-lg bg-white text-[#3e6b48] hover:bg-white/90">
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-8 py-6 text-lg border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
