export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  artist: string
  description: string
  featured: boolean
}

export interface ProductDetail extends Product {
  images: string[]
  story: string
  dimensions: string
  materials: string
  availability: "in-stock" | "limited" | "sold-out"
  artistBio: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tarija Valley Ceramic Vase",
    price: 89,
    image: "/bolivian-ceramic-vase.png",
    category: "pottery",
    artist: "María Gonzalez",
    description:
      "Hand-thrown ceramic vase featuring traditional Chapaco motifs inspired by the fertile valleys of Tarija.",
    featured: true,
  },
  {
    id: "2",
    name: "Vendimia Harvest Textile",
    price: 156,
    image: "/placeholder-sbqkz.png",
    category: "textiles",
    artist: "Carlos Mendoza",
    description: "Vibrant hand-woven textile celebrating the annual grape harvest tradition of Tarija.",
    featured: true,
  },
  {
    id: "3",
    name: "Andean Sunset Painting",
    price: 234,
    image: "/andean-sunset-oil.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description: "Oil painting capturing the golden hour over the Andean peaks surrounding Tarija.",
    featured: true,
  },
  {
    id: "4",
    name: "Traditional Clay Pitcher",
    price: 67,
    image: "/placeholder-5855t.png",
    category: "pottery",
    artist: "José Vargas",
    description: "Functional clay pitcher with geometric patterns passed down through generations.",
    featured: true,
  },
  {
    id: "5",
    name: "Chapaco Wedding Blanket",
    price: 298,
    image: "/chapaco-wedding-blanket.png",
    category: "textiles",
    artist: "Elena Morales",
    description: "Ceremonial blanket with intricate patterns traditionally used in Chapaco wedding celebrations.",
    featured: false,
  },
  {
    id: "6",
    name: "Mountain Spirit Sculpture",
    price: 445,
    image: "/mountain-spirit-sculpture.png",
    category: "sculptures",
    artist: "Roberto Silva",
    description: "Hand-carved wooden sculpture representing the protective spirits of the Andes.",
    featured: false,
  },
  {
    id: "7",
    name: "Harvest Moon Bowl",
    price: 78,
    image: "/harvest-moon-bowl.png",
    category: "pottery",
    artist: "María Gonzalez",
    description: "Ceramic bowl with moon phases design, perfect for serving traditional foods.",
    featured: false,
  },
  {
    id: "8",
    name: "Valley Flowers Painting",
    price: 189,
    image: "/valley-flowers-painting.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description: "Watercolor painting of wildflowers native to the Tarija valleys.",
    featured: false,
  },
  {
    id: "9",
    name: "Ancestral Mask",
    price: 167,
    image: "/ancestral-mask.png",
    category: "sculptures",
    artist: "Diego Fernandez",
    description: "Traditional ceremonial mask carved from local wood with natural pigments.",
    featured: false,
  },
  {
    id: "10",
    name: "Vineyard Runner",
    price: 134,
    image: "/vineyard-runner.png",
    category: "textiles",
    artist: "Carlos Mendoza",
    description: "Table runner featuring grape vine motifs in traditional Chapaco colors.",
    featured: false,
  },
  {
    id: "11",
    name: "Sacred Geometry Plate",
    price: 56,
    image: "/sacred-geometry-plate.png",
    category: "pottery",
    artist: "José Vargas",
    description: "Decorative plate with sacred geometric patterns from pre-Columbian traditions.",
    featured: false,
  },
  {
    id: "12",
    name: "Condor Flight Painting",
    price: 312,
    image: "/condor-flight-painting.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description: "Large oil painting depicting the majestic Andean condor soaring over Tarija.",
    featured: false,
  },
]

export const productDetails: Record<string, ProductDetail> = {
  "1": {
    ...products[0],
    images: ["/bolivian-ceramic-vase.png", "/ceramic-vase-detail-1.png", "/ceramic-vase-detail-2.png"],
    story:
      "This exquisite vase was born from the red clay of Tarija's valleys, shaped by María's hands that have known this craft for over three decades. Each curve tells the story of the Chapaco people, with motifs that have been passed down through generations of potters. The earthy tones reflect the rich soil where our ancestors first learned to transform clay into art.",
    dimensions: '12" H x 8" W',
    materials: "Local red clay, natural glazes, traditional firing techniques",
    availability: "in-stock",
    artistBio:
      "María Gonzalez is a third-generation ceramic artist from Tarija. She learned the ancient techniques from her grandmother and has dedicated her life to preserving traditional Chapaco pottery methods while adding her own contemporary touch.",
  },
  "2": {
    ...products[1],
    images: ["/placeholder-sbqkz.png", "/textile-detail-1.png", "/textile-detail-2.png"],
    story:
      "Woven during the harvest season when the grapes hang heavy on the vines, this textile captures the essence of Tarija's most celebrated tradition. Carlos spent months preparing the natural dyes from local plants, creating the deep purples and golden yellows that mirror the colors of our beloved vendimia festival.",
    dimensions: '48" L x 24" W',
    materials: "Hand-spun wool, natural plant dyes, traditional backstrap loom",
    availability: "limited",
    artistBio:
      "Carlos Mendoza is a master weaver who has spent over 25 years perfecting the art of traditional Chapaco textiles. His work has been featured in cultural exhibitions across Bolivia and represents the finest of our weaving traditions.",
  },
  "3": {
    ...products[2],
    images: ["/andean-sunset-oil.png", "/painting-detail-1.png", "/painting-detail-2.png"],
    story:
      "Painted from Ana's studio overlooking the Tarija valley, this piece captures a moment when the Andean peaks are bathed in golden light. She waited months for the perfect evening, when the clouds would part just so, allowing the sunset to paint the mountains in shades that no palette could fully capture.",
    dimensions: '24" H x 36" W',
    materials: "Oil on canvas, handmade wooden frame",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a contemporary artist whose work bridges traditional Chapaco themes with modern painting techniques. Her landscapes have become iconic representations of Tarija's natural beauty.",
  },
  "4": {
    ...products[3],
    images: ["/placeholder-5855t.png", "/pitcher-detail-1.png", "/pitcher-detail-2.png"],
    story:
      "This pitcher embodies the practical beauty of Chapaco craftsmanship. José shaped it using techniques his grandfather taught him, creating not just a vessel, but a piece of functional art. The geometric patterns are more than decoration—they tell the story of water, earth, and the cycle of life that sustains our valley.",
    dimensions: '10" H x 6" W',
    materials: "Local clay, traditional slip painting, wood-fired finish",
    availability: "in-stock",
    artistBio:
      "José Vargas comes from a long line of potters. His functional ceramics combine ancient techniques with contemporary design, creating pieces that are both beautiful and practical for everyday use.",
  },
  "5": {
    ...products[4],
    images: ["/chapaco-wedding-blanket.png", "/chapaco-wedding-blanket.png", "/chapaco-wedding-blanket.png"],
    story:
      "This beautiful textile piece represents the finest of Chapaco artistry. Created by Elena Morales, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "Elena Morales is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "6": {
    ...products[5],
    images: ["/mountain-spirit-sculpture.png", "/mountain-spirit-sculpture.png", "/mountain-spirit-sculpture.png"],
    story:
      "This beautiful sculpture piece represents the finest of Chapaco artistry. Created by Roberto Silva, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "Roberto Silva is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "7": {
    ...products[6],
    images: ["/harvest-moon-bowl.png", "/harvest-moon-bowl.png", "/harvest-moon-bowl.png"],
    story:
      "This beautiful pottery piece represents the finest of Chapaco artistry. Created by María Gonzalez, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "María Gonzalez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "8": {
    ...products[7],
    images: ["/valley-flowers-painting.png", "/valley-flowers-painting.png", "/valley-flowers-painting.png"],
    story:
      "This beautiful painting piece represents the finest of Chapaco artistry. Created by Ana Rodriguez, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "9": {
    ...products[8],
    images: ["/ancestral-mask.png", "/ancestral-mask.png", "/ancestral-mask.png"],
    story:
      "This beautiful sculpture piece represents the finest of Chapaco artistry. Created by Diego Fernandez, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "Diego Fernandez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "10": {
    ...products[9],
    images: ["/vineyard-runner.png", "/vineyard-runner.png", "/vineyard-runner.png"],
    story:
      "This beautiful textile piece represents the finest of Chapaco artistry. Created by Carlos Mendoza, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "Carlos Mendoza is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "11": {
    ...products[10],
    images: ["/sacred-geometry-plate.png", "/sacred-geometry-plate.png", "/sacred-geometry-plate.png"],
    story:
      "This beautiful pottery piece represents the finest of Chapaco artistry. Created by José Vargas, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "José Vargas is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "12": {
    ...products[11],
    images: ["/condor-flight-painting.png", "/condor-flight-painting.png", "/condor-flight-painting.png"],
    story:
      "This beautiful painting piece represents the finest of Chapaco artistry. Created by Ana Rodriguez, it embodies the traditions and cultural heritage of Tarija, Bolivia.",
    dimensions: "Varies",
    materials: "Traditional materials and techniques",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
}

export const featuredProducts = products.filter((product) => product.featured)

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "pottery", label: "Pottery" },
  { value: "textiles", label: "Textiles" },
  { value: "paintings", label: "Paintings" },
  { value: "sculptures", label: "Sculptures" },
]

export const artists = [
  { value: "all", label: "All Artists" },
  { value: "María Gonzalez", label: "María Gonzalez" },
  { value: "Carlos Mendoza", label: "Carlos Mendoza" },
  { value: "Ana Rodriguez", label: "Ana Rodriguez" },
  { value: "José Vargas", label: "José Vargas" },
  { value: "Elena Morales", label: "Elena Morales" },
  { value: "Roberto Silva", label: "Roberto Silva" },
  { value: "Diego Fernandez", label: "Diego Fernandez" },
]

export const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-100", label: "Under $100" },
  { value: "100-200", label: "$100 - $200" },
  { value: "200-300", label: "$200 - $300" },
  { value: "300+", label: "$300+" },
]

export function getProductById(id: string): ProductDetail | undefined {
  return productDetails[id]
}
