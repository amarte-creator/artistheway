"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send this to your API
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our art, artists, or mission? We'd love to hear from you and share the stories
                behind each piece.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="rounded-2xl border-0 shadow-lg glass">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-xl"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="rounded-xl"
                          placeholder="What would you like to discuss?"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="rounded-xl resize-none"
                          placeholder="Tell us about your interest in Chapaco art, questions about specific pieces, or how we can help you..."
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-2xl bg-[#3e6b48] hover:bg-[#3e6b48]/90 text-lg py-6"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="rounded-2xl border-0 shadow-lg glass">
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-semibold">Contact Information</h3>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Mail className="h-5 w-5 text-[#3e6b48] mt-0.5" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-muted-foreground">hello@artistheway.com</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <MessageCircle className="h-5 w-5 text-[#6a3b83] mt-0.5" />
                          <div>
                            <p className="font-medium">WhatsApp</p>
                            <p className="text-sm text-muted-foreground">+591 123 456 789</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-[#f2a65a] mt-0.5" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-sm text-muted-foreground">Tarija, Bolivia</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Phone className="h-5 w-5 text-[#c97d60] mt-0.5" />
                          <div>
                            <p className="font-medium">Response Time</p>
                            <p className="text-sm text-muted-foreground">Within 24 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-0 shadow-lg glass">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-semibold">Quick Connect</h3>
                      <p className="text-sm text-muted-foreground">
                        For immediate assistance or to discuss custom orders, reach out via WhatsApp.
                      </p>
                      <Button asChild className="w-full rounded-2xl bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                        <a
                          href="https://wa.me/591123456789?text=Hello! I'm interested in learning more about Chapaco art."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-0 shadow-lg glass">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-semibold">Visit Our Workshop</h3>
                      <p className="text-sm text-muted-foreground">
                        Planning a trip to Tarija? We'd love to show you where the magic happens and introduce you to
                        our talented artists.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          <strong>Address:</strong>
                        </p>
                        <p>Calle de los Artesanos 123</p>
                        <p>Tarija, Bolivia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold">How long does shipping take?</h3>
                  <p className="text-muted-foreground">
                    We offer free worldwide shipping with delivery in 7-14 business days. Each piece is carefully
                    packaged to ensure safe arrival.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold">Are the pieces authentic?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. Every artwork is created by verified Chapaco artists using traditional techniques and
                    materials from the Tarija region.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold">Can I commission custom work?</h3>
                  <p className="text-muted-foreground">
                    Yes! Many of our artists accept custom commissions. Contact us to discuss your vision and we'll
                    connect you with the right artist.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold">How do you support the artists?</h3>
                  <p className="text-muted-foreground">
                    70% of every sale goes directly to the artist. The remaining 30% supports platform maintenance and
                    cultural preservation programs.
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
