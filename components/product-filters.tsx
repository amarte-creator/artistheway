"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { categories, artists, priceRanges } from "@/lib/products"

interface ProductFiltersProps {
  searchQuery: string
  selectedCategory: string
  selectedArtist: string
  selectedPriceRange: string
  onSearchChange: (query: string) => void
  onCategoryChange: (category: string) => void
  onArtistChange: (artist: string) => void
  onPriceRangeChange: (range: string) => void
  onClearFilters: () => void
  hideCategoryFilter?: boolean
}

export function ProductFilters({
  searchQuery,
  selectedCategory,
  selectedArtist,
  selectedPriceRange,
  onSearchChange,
  onCategoryChange,
  onArtistChange,
  onPriceRangeChange,
  onClearFilters,
  hideCategoryFilter = false,
}: ProductFiltersProps) {
  const hasActiveFilters =
    selectedCategory !== "all" || selectedArtist !== "all" || selectedPriceRange !== "all" || searchQuery !== ""

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search artworks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 rounded-xl"
        />
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-${hideCategoryFilter ? '2' : '3'} gap-4`}>
        {!hideCategoryFilter && (
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <Select value={selectedArtist} onValueChange={onArtistChange}>
          <SelectTrigger className="rounded-xl">
            <SelectValue placeholder="Artist" />
          </SelectTrigger>
          <SelectContent>
            {artists.map((artist) => (
              <SelectItem key={artist.value} value={artist.value}>
                {artist.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger className="rounded-xl">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" onClick={onClearFilters} className="w-full md:w-auto rounded-xl bg-transparent">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  )
}
