import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Truck, Clock, Shield, MapPin, Package, Globe } from "lucide-react"
import Link from "next/link"

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Shipping Information</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We carefully package and ship your Chapaco art with the same care and attention that went into creating it.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Careful Packaging</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each piece of Chapaco art is carefully wrapped and packaged to ensure it arrives at your door in
                  perfect condition. We use museum-quality materials to protect your investment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our packaging process includes acid-free tissue paper, protective corners, and sturdy boxes designed
                  specifically for artwork. We also include care instructions to help you preserve your piece for years to come.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#3e6b48]">100%</div>
                    <div className="text-sm text-muted-foreground">Safe Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#6a3b83]">24-48h</div>
                    <div className="text-sm text-muted-foreground">Processing Time</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass bg-gradient-to-br from-[#3e6b48]/20 to-[#6a3b83]/20 flex items-center justify-center">
                  <Package className="h-24 w-24 text-[#3e6b48]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Shipping Options</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the shipping option that best fits your needs and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 rounded-full bg-[#3e6b48]/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-[#3e6b48]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">Standard Shipping</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Reliable delivery with tracking
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-medium">7-14 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-medium">$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tracking:</span>
                    <span className="font-medium">Included</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg border border-[#6a3b83]">
                <div className="w-16 h-16 rounded-full bg-[#6a3b83]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#6a3b83]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">Express Shipping</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Faster delivery for urgent orders
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-medium">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-medium">$25.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tracking:</span>
                    <span className="font-medium">Priority</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 rounded-full bg-[#f2a65a]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#f2a65a]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">Premium Shipping</h3>
                <p className="text-muted-foreground text-center mb-4">
                  White-glove service with insurance
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-medium">1-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-medium">$45.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance:</span>
                    <span className="font-medium">Full Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass bg-gradient-to-br from-[#6a3b83]/20 to-[#f2a65a]/20 flex items-center justify-center">
                  <Globe className="h-24 w-24 text-[#6a3b83]" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">International Shipping</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We ship worldwide to bring Chapaco art to collectors and art lovers around the globe. International
                  orders are carefully handled to ensure safe delivery across borders.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Please note that international orders may be subject to customs duties and taxes, which are the
                  responsibility of the recipient. Delivery times vary by destination.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#3e6b48]"></div>
                    <span className="text-sm">Customs documentation included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#6a3b83]"></div>
                    <span className="text-sm">Tracking available worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#f2a65a]"></div>
                    <span className="text-sm">Insurance coverage included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Shipping Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here's what happens after you place your order.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#3e6b48]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#3e6b48]">1</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Order Confirmation</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive an email confirmation with your order details and estimated delivery date.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6a3b83]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#6a3b83]">2</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Careful Packaging</h3>
                <p className="text-muted-foreground text-sm">
                  Our team carefully packages your artwork using museum-quality materials to ensure safe delivery.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f2a65a]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#f2a65a]">3</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Shipment Tracking</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive tracking information so you can follow your package's journey to your door.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c97d60]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#c97d60]">4</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Safe Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Your artwork arrives safely at your door, ready to bring Chapaco culture into your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Important Information</h2>
                <p className="text-lg text-muted-foreground">
                  Please review these important details about your shipment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold">Delivery Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-[#3e6b48]" />
                      <span>Ensure someone is available to receive the package</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Package className="h-4 w-4 mt-0.5 text-[#6a3b83]" />
                      <span>Inspect the package before signing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="h-4 w-4 mt-0.5 text-[#f2a65a]" />
                      <span>Report any damage immediately</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold">Care Instructions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#3e6b48] mt-2"></span>
                      <span>Keep artwork away from direct sunlight</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#6a3b83] mt-2"></span>
                      <span>Maintain stable temperature and humidity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#f2a65a] mt-2"></span>
                      <span>Clean with soft, dry cloth only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Questions About Shipping?</h2>
              <p className="text-lg text-muted-foreground">
                Our team is here to help with any questions about shipping, delivery, or packaging.
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
