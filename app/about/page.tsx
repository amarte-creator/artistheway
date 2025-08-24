import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Users, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Our Story</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From the fertile valleys of Tarija, Bolivia, we bring you authentic paintings and photography that capture the soul of
                our ancestors and the timeless beauty of Chapaco culture.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">The Heart of Chapaco Culture</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the southern valleys of Bolivia, where the earth is rich with clay and the air carries the scent of
                  grape vines, lies Tarija—home to the proud Chapaco people. For generations, our artists have
                  captured the beauty of this land through paintings and photography that tell our stories.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each piece in our collection is more than decoration; it's a bridge between worlds, connecting you to
                  the hands that shaped it, the traditions that inspired it, and the community that depends on it.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#3e6b48]">50+</div>
                    <div className="text-sm text-muted-foreground">Local Artists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#6a3b83]">500+</div>
                    <div className="text-sm text-muted-foreground">Paintings & Photos</div>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe that art has the power to preserve culture, empower communities, and connect hearts across
                continents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#3e6b48]/10 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-[#3e6b48]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Preserve Tradition</h3>
                <p className="text-muted-foreground">
                  Keeping ancient Chapaco artistic traditions alive through contemporary paintings and photography.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6a3b83]/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-[#6a3b83]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Empower Artists</h3>
                <p className="text-muted-foreground">
                  Providing fair compensation and global exposure for talented Chapaco painters and photographers.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f2a65a]/10 flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-[#f2a65a]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Connect Cultures</h3>
                <p className="text-muted-foreground">
                  Building bridges between Tarija and the world through the universal language of art.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c97d60]/10 flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-[#c97d60]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Ensure Quality</h3>
                <p className="text-muted-foreground">
                  Every piece meets the highest standards of craftsmanship and authentic cultural representation.
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
                    alt="Chapaco artisan working in traditional workshop"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Empowering Communities</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you purchase from Artistheway, you're not just buying art—you're investing in a community. 70% of
                  every sale goes directly to the artist, ensuring they can continue their craft and support their
                  families.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The remaining 30% supports our mission: maintaining this platform, documenting traditional techniques,
                  and training the next generation of Chapaco artists. Together, we're building a sustainable future for
                  our cultural heritage.
                </p>
                <Button asChild className="rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                  <Link href="/shop">Support Our Artists</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">The Artistheway Promise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="space-y-3">
                                  <h3 className="font-serif text-lg font-semibold">Authentic Origins</h3>
                <p className="text-muted-foreground">
                  Every painting and photograph is created by verified Chapaco artists using traditional techniques and
                  contemporary vision.
                </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold">Fair Trade</h3>
                  <p className="text-muted-foreground">
                    Artists receive fair compensation for their work, ensuring sustainable livelihoods and cultural
                    preservation.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Your purchase supports not just individual artists, but the entire Chapaco cultural ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
