"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { products } from "@/lib/products"

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedArtist, setSelectedArtist] = useState("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      // Artist filter
      const matchesArtist = selectedArtist === "all" || product.artist === selectedArtist

      // Price range filter
      let matchesPrice = true
      if (selectedPriceRange !== "all") {
        const [min, max] = selectedPriceRange.split("-").map(Number)
        if (selectedPriceRange === "300+") {
          matchesPrice = product.price >= 300
        } else {
          matchesPrice = product.price >= min && product.price <= max
        }
      }

      return matchesSearch && matchesCategory && matchesArtist && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedArtist, selectedPriceRange])

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
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
              <h1 className="font-serif text-3xl md:text-4xl font-bold">Shop Collection</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover authentic Chapaco artworks, each piece carefully crafted by talented artists from Tarija,
                Bolivia.
              </p>
            </div>

            <div className="mb-8">
              <ProductFilters
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
                selectedArtist={selectedArtist}
                selectedPriceRange={selectedPriceRange}
                onSearchChange={setSearchQuery}
                onCategoryChange={setSelectedCategory}
                onArtistChange={setSelectedArtist}
                onPriceRangeChange={setSelectedPriceRange}
                onClearFilters={handleClearFilters}
              />
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} artworks
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
                <h3 className="font-serif text-xl font-semibold mb-2">No artworks found</h3>
                <p className="text-muted-foreground mb-6">
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
