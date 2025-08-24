"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { products } from "@/lib/products"

export default function PaintingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArtist, setSelectedArtist] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")

  // Filter to only show painting products
  const paintingProducts = useMemo(() => {
    return products.filter((product) => product.category === "paintings")
  }, [])

  const filteredProducts = useMemo(() => {
    return paintingProducts.filter((product) => {
      // Search filter
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Artist filter
      const matchesArtist = selectedArtist === "all" || product.artist === selectedArtist

      // Price range filter
      let matchesPrice = true
      if (selectedPriceRange !== "all") {
        if (selectedPriceRange === "100") {
          matchesPrice = product.price === 100
        } else {
          const [min, max] = selectedPriceRange.split("-").map(Number)
          matchesPrice = product.price >= min && product.price <= max
        }
      }

      return matchesSearch && matchesArtist && matchesPrice
    })
  }, [paintingProducts, searchQuery, selectedArtist, selectedPriceRange])

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedArtist("all")
    setSelectedPriceRange("all")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-800">Paintings Collection</h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explore our curated collection of original paintings that celebrate the beauty and culture of Tarija. 
                Each piece is a unique expression of our artists' connection to the land and traditions of the Chapaco people.
              </p>
            </div>

            <div className="mb-8">
              <ProductFilters
                searchQuery={searchQuery}
                selectedCategory="paintings"
                selectedArtist={selectedArtist}
                selectedPriceRange={selectedPriceRange}
                onSearchChange={setSearchQuery}
                onCategoryChange={() => {}} // Disabled for paintings page
                onArtistChange={setSelectedArtist}
                onPriceRangeChange={setSelectedPriceRange}
                onClearFilters={handleClearFilters}
                hideCategoryFilter={true}
              />
            </div>

            <div className="mb-6">
              <p className="text-slate-600">
                Showing {filteredProducts.length} of {paintingProducts.length} paintings
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="font-serif text-xl font-semibold mb-2 text-slate-800">No paintings found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
