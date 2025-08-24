import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mountain, Grape, Heart, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeritagePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Chapaco Heritage</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the rich cultural heritage of the Chapaco people, whose traditions have shaped the artistic soul of Tarija for generations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">The Land That Shapes Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tarija, nestled in the southern valleys of Bolivia, is more than just a place—it's the cradle of
                  Chapaco culture. The fertile soil, the gentle climate, and the majestic mountains have all played
                  their part in shaping our artistic traditions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the ancient techniques passed down through generations to the contemporary expressions that
                  honor our heritage, every piece of Chapaco art tells a story of connection to this sacred land.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#3e6b48]">500+</div>
                    <div className="text-sm text-muted-foreground">Years of Tradition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#6a3b83]">15+</div>
                    <div className="text-sm text-muted-foreground">Traditional Techniques</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
                  <Image
                    src="/tarija-valley-landscape.png"
                    alt="Beautiful Tarija valley landscape"
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Pillars of Chapaco Culture</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundation of our artistic heritage rests on these four essential elements that have sustained our culture for centuries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#3e6b48]/10 flex items-center justify-center mx-auto">
                  <Mountain className="h-8 w-8 text-[#3e6b48]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Connection to Land</h3>
                <p className="text-muted-foreground">
                  Our art reflects the deep spiritual connection we have with the mountains, valleys, and rivers of Tarija.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6a3b83]/10 flex items-center justify-center mx-auto">
                  <Grape className="h-8 w-8 text-[#6a3b83]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Viticultural Heritage</h3>
                <p className="text-muted-foreground">
                  The wine-making traditions of Tarija have influenced our artistic expressions and cultural celebrations.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f2a65a]/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-[#f2a65a]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Family Traditions</h3>
                <p className="text-muted-foreground">
                  Artistic skills are passed down through families, preserving techniques and stories for future generations.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c97d60]/10 flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-[#c97d60]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Timeless Craftsmanship</h3>
                <p className="text-muted-foreground">
                  We honor the patience and dedication required to create pieces that will last for generations.
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
                    src="/chapaco-artisan-workshop.png"
                    alt="Traditional Chapaco artisan workshop"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Traditional Techniques</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our artists employ techniques that have been refined over centuries. From the preparation of natural
                  pigments to the careful application of brush strokes, every step honors the wisdom of our ancestors.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These methods are not just about creating beautiful art—they're about maintaining a living connection
                  to our cultural roots and ensuring that future generations can continue to express their Chapaco identity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#3e6b48]"></div>
                    <span className="text-sm">Natural pigment preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#6a3b83]"></div>
                    <span className="text-sm">Traditional brush techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#f2a65a]"></div>
                    <span className="text-sm">Sacred geometry patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#c97d60]"></div>
                    <span className="text-sm">Seasonal color palettes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Cultural Symbols</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the meaningful symbols and motifs that appear throughout Chapaco art and their cultural significance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/sacred-geometry-abstract.png"
                    alt="Sacred geometry patterns"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Sacred Geometry</h3>
                <p className="text-muted-foreground text-sm">
                  Geometric patterns that represent the harmony between earth, sky, and human spirit, often used to
                  create balance and protection in our art.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/condor-flight-painting.png"
                    alt="Condor in flight"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">The Condor</h3>
                <p className="text-muted-foreground text-sm">
                  A powerful symbol of freedom and connection to the spiritual world, representing the bridge between
                  earthly and divine realms in Chapaco cosmology.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src="/valley-flowers-painting.png"
                    alt="Valley flowers"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Valley Flowers</h3>
                <p className="text-muted-foreground text-sm">
                  Native flowers represent the fertility and beauty of our land, symbolizing growth, renewal, and the
                  cyclical nature of life in Tarija.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Preserving Our Heritage</h2>
              <p className="text-lg text-muted-foreground">
                By supporting Chapaco artists, you're helping to preserve a cultural heritage that spans centuries.
                Every purchase ensures that our traditions continue to thrive and evolve.
              </p>
              <Button asChild className="rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                <Link href="/shop">Explore Our Collection</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
