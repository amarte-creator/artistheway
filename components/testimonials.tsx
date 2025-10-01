"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LavaLamp } from "@/components/ui/fluid-blob"
import { Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  product: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "The 'Tarija Valley Sunset' painting exceeded all my expectations. The colors are so vibrant and the quality is outstanding. It's now the centerpiece of my living room and everyone asks about it!",
    product: "Tarija Valley Sunset",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: "2",
    name: "Marco Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "As someone who appreciates authentic cultural art, I was blown away by the craftsmanship and story behind each piece. The 'Chapaco Village Life' photograph captures the soul of Bolivia perfectly.",
    product: "Chapaco Village Life",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: "3",
    name: "Emma Thompson",
    location: "London, UK",
    rating: 5,
    text: "I've purchased three pieces from Artistheway and each one tells such a beautiful story. The artists' passion really comes through in their work. Highly recommend!",
    product: "Valley Flowers in Bloom",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: "4",
    name: "David Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "The digital download process was seamless and the print quality is museum-grade. I've printed several pieces and they look absolutely stunning on my walls.",
    product: "Condor Flight Over Tarija",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: "5",
    name: "Isabella Martinez",
    location: "Mexico City, Mexico",
    rating: 5,
    text: "Supporting these talented Chapaco artists while getting beautiful art for my home feels amazing. The customer service was excellent and shipping was fast.",
    product: "Sacred Geometry Abstract",
    avatar: "/placeholder-user.jpg"
  },
  {
    id: "6",
    name: "James Wilson",
    location: "Melbourne, Australia",
    rating: 5,
    text: "I'm an art collector and I can honestly say the quality and authenticity of these pieces rivals anything I've seen in galleries. The cultural significance makes them even more special.",
    product: "Ancestral Memory",
    avatar: "/placeholder-user.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Fluid Blob Background */}
      <div className="absolute inset-0 opacity-18">
        <LavaLamp />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">What Our Customers Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have brought authentic Chapaco art into their homes.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 from 200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 glass">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                      <img
                        src={testimonial.avatar || "/placeholder-user.jpg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1 inline-block">
                    Purchased: {testimonial.product}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>200+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>15 Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>500+ Artworks Sold</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
