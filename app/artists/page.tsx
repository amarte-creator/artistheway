import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Palette, Camera, Award, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ArtistsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Our Artists</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Meet the talented Chapaco artists whose hands bring our cultural heritage to life through paintings and photography.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">The Masters of Tarija</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our artists are the heart and soul of Chapaco culture. Each one brings generations of tradition,
                  combined with their unique vision and contemporary techniques, to create pieces that honor our past
                  while embracing the future.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From traditional painters who learned their craft from their grandparents to innovative photographers
                  capturing the changing landscape of Tarija, our artists represent the full spectrum of Chapaco
                  artistic expression.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#3e6b48]">50+</div>
                    <div className="text-sm text-muted-foreground">Active Artists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#6a3b83]">3+</div>
                    <div className="text-sm text-muted-foreground">Generations</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                  <Image
                    src="/bolivian-female-painter.png"
                    alt="Chapaco female painter at work"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Featured Artists</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the stories behind the hands that create our most beloved pieces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/bolivian-ceramic-artist.png"
                    alt="María Elena, Traditional Painter"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">María Elena</h3>
                <p className="text-sm text-muted-foreground mb-3">Traditional Painter</p>
                <p className="text-muted-foreground text-sm">
                  A third-generation painter who specializes in capturing the vibrant colors and textures of Tarija's
                  landscapes. Her work has been featured in galleries across Bolivia.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/bolivian-weaver-portrait.png"
                    alt="Carlos Mendoza, Landscape Photographer"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Carlos Mendoza</h3>
                <p className="text-sm text-muted-foreground mb-3">Landscape Photographer</p>
                <p className="text-muted-foreground text-sm">
                  Known for his stunning captures of the Tarija valley at different times of day. His photographs
                  document the changing seasons and the timeless beauty of our homeland.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/tarija-artisans.png"
                    alt="Ana Sofia, Contemporary Artist"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Ana Sofia</h3>
                <p className="text-sm text-muted-foreground mb-3">Contemporary Artist</p>
                <p className="text-muted-foreground text-sm">
                  Blends traditional Chapaco motifs with modern techniques, creating pieces that bridge the gap between
                  our cultural heritage and contemporary art movements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                  <Image
                    src="/chapaco-wedding-blanket.png"
                    alt="Traditional Chapaco artisan workshop"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Supporting Our Artists</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you purchase from our artists, you're not just buying a piece of art—you're supporting a family,
                  preserving a tradition, and ensuring that Chapaco culture continues to thrive for generations to come.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our artists receive 70% of every sale, allowing them to invest in their craft, support their families,
                  and pass their knowledge on to the next generation of Chapaco artists.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-[#3e6b48]" />
                    <span className="text-sm">Fair compensation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-[#6a3b83]" />
                    <span className="text-sm">Cultural preservation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="h-5 w-5 text-[#f2a65a]" />
                    <span className="text-sm">Skill development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-[#c97d60]" />
                    <span className="text-sm">Global exposure</span>
                  </div>
                </div>
                <Button asChild className="rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                  <Link href="/shop">View Their Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Join Our Artist Community</h2>
              <p className="text-lg text-muted-foreground">
                Are you a Chapaco artist interested in sharing your work with the world? We're always looking to
                welcome new talent to our community.
              </p>
              <Button asChild variant="outline" className="rounded-2xl">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
