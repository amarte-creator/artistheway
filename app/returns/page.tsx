import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RefreshCw, Shield, Clock, Heart, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Returns & Exchanges</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We want you to love your Chapaco art. If you're not completely satisfied, we're here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Return Promise</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that art is deeply personal, and we want you to find the perfect piece for your home.
                  That's why we offer a generous return policy that puts your satisfaction first.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If your artwork doesn't meet your expectations or if you simply change your mind, we'll work with
                  you to find a solution that makes you happy. Your satisfaction is our priority.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#3e6b48]">30</div>
                    <div className="text-sm text-muted-foreground">Days to Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-[#6a3b83]">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Guaranteed</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden glass bg-gradient-to-br from-[#3e6b48]/20 to-[#6a3b83]/20 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-[#3e6b48]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Return Policy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Clear, fair, and customer-friendly return terms to ensure your complete satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 rounded-full bg-[#3e6b48]/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#3e6b48]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">30-Day Window</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Generous time to decide
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Return Period:</span>
                    <span className="font-medium">30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>From:</span>
                    <span className="font-medium">Delivery date</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Condition:</span>
                    <span className="font-medium">Original packaging</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg border border-[#6a3b83]">
                <div className="w-16 h-16 rounded-full bg-[#6a3b83]/10 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-[#6a3b83]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">Easy Process</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Simple return procedure
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Contact:</span>
                    <span className="font-medium">Email or phone</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Label:</span>
                    <span className="font-medium">Provided by us</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Refund:</span>
                    <span className="font-medium">Within 5-7 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 rounded-full bg-[#f2a65a]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#f2a65a]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-center mb-2">Full Protection</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Complete customer satisfaction
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Refund:</span>
                    <span className="font-medium">Full amount</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="font-medium">Free return</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Insurance:</span>
                    <span className="font-medium">Included</span>
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
                  <CheckCircle className="h-24 w-24 text-[#6a3b83]" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold">What's Covered</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our return policy covers a wide range of situations to ensure you're completely satisfied with your purchase.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#3e6b48] mt-0.5" />
                    <div>
                      <span className="font-medium">Change of mind</span>
                      <p className="text-sm text-muted-foreground">Simply not the right piece for your space</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#6a3b83] mt-0.5" />
                    <div>
                      <span className="font-medium">Size or style preference</span>
                      <p className="text-sm text-muted-foreground">Different dimensions or artistic style needed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#f2a65a] mt-0.5" />
                    <div>
                      <span className="font-medium">Quality issues</span>
                      <p className="text-sm text-muted-foreground">Any defects or damage during shipping</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#c97d60] mt-0.5" />
                    <div>
                      <span className="font-medium">Color variations</span>
                      <p className="text-sm text-muted-foreground">Significant differences from product images</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Return Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple steps to return your artwork if needed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#3e6b48]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#3e6b48]">1</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Contact Us</h3>
                <p className="text-muted-foreground text-sm">
                  Email or call us within 30 days of delivery to initiate your return.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6a3b83]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#6a3b83]">2</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Package Securely</h3>
                <p className="text-muted-foreground text-sm">
                  Repackage the artwork in its original packaging and materials.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f2a65a]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#f2a65a]">3</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Ship Back</h3>
                <p className="text-muted-foreground text-sm">
                  Use the prepaid shipping label we provide to return the artwork.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c97d60]/10 flex items-center justify-center mx-auto">
                  <span className="font-serif text-2xl font-bold text-[#c97d60]">4</span>
                </div>
                <h3 className="font-serif text-lg font-semibold">Receive Refund</h3>
                <p className="text-muted-foreground text-sm">
                  Get your full refund within 5-7 business days of receiving the return.
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
                  Please review these important details about our return policy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold">Return Requirements</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-[#3e6b48]" />
                      <span>Artwork must be in original condition</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-[#6a3b83]" />
                      <span>Original packaging and materials included</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-[#f2a65a]" />
                      <span>Return initiated within 30 days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-[#c97d60]" />
                      <span>Valid reason for return provided</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold">Non-Returnable Items</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 text-red-500" />
                      <span>Custom or commissioned pieces</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 text-red-500" />
                      <span>Damaged or altered artwork</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 text-red-500" />
                      <span>Digital downloads</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 mt-0.5 text-red-500" />
                      <span>Sale or clearance items</span>
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Need Help?</h2>
              <p className="text-lg text-muted-foreground">
                Our customer service team is here to help with any questions about returns, exchanges, or your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="rounded-2xl">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90">
                  <Link href="/shop">Continue Shopping</Link>
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
