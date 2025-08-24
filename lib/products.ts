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
  story: string
  dimensions: string
  materials: string
  availability: "in-stock" | "limited" | "sold-out"
  artistBio: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tarija Valley Sunset",
    price: 50,
    image: "/andean-sunset-oil.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description:
      "Oil painting capturing the golden hour over the Andean peaks surrounding Tarija, with rich textures and vibrant colors.",
    featured: true,
  },
  {
    id: "2",
    name: "Vineyard Harvest Morning",
    price: 70,
    image: "/vineyard-runner.png",
    category: "photography",
    artist: "Carlos Mendoza",
    description: "Stunning photograph of the morning light filtering through grapevines during harvest season in Tarija.",
    featured: true,
  },
  {
    id: "3",
    name: "Valley Flowers in Bloom",
    price: 100,
    image: "/valley-flowers-painting.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description: "Watercolor painting of wildflowers native to the Tarija valleys, capturing the delicate beauty of spring.",
    featured: true,
  },
  {
    id: "4",
    name: "Chapaco Village Life",
    price: 100,
    image: "/tarija-artisans.png",
    category: "photography",
    artist: "María Gonzalez",
    description: "Documentary photography capturing the daily life and traditions of Chapaco artisans in their workshops.",
    featured: true,
  },
  {
    id: "5",
    name: "Mountain Spirit Landscape",
    price: 100,
    image: "/mountain-spirit-sculpture.png",
    category: "paintings",
    artist: "Roberto Silva",
    description: "Large acrylic painting depicting the mystical mountains and spirits of the Andes in bold, contemporary style.",
    featured: false,
  },
  {
    id: "6",
    name: "Condor Flight Over Tarija",
    price: 100,
    image: "/condor-flight-painting.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description: "Dramatic oil painting of the majestic Andean condor soaring over the Tarija valley at dawn.",
    featured: false,
  },
  {
    id: "7",
    name: "Artisan Portrait Series",
    price: 100,
    image: "/bolivian-ceramic-artist.png",
    category: "photography",
    artist: "Carlos Mendoza",
    description: "Intimate black and white photography series featuring the faces and hands of Tarija's master artisans.",
    featured: false,
  },
  {
    id: "8",
    name: "Sacred Geometry Abstract",
    price: 100,
    image: "/sacred-geometry-abstract.png",
    category: "paintings",
    artist: "José Vargas",
    description: "Contemporary abstract painting inspired by pre-Columbian sacred geometry and Chapaco cultural symbols.",
    featured: false,
  },
  {
    id: "9",
    name: "Weaver's Hands at Work",
    price: 100,
    image: "/bolivian-weaver-portrait.png",
    category: "photography",
    artist: "María Gonzalez",
    description: "Close-up photography capturing the skilled hands of traditional weavers creating intricate patterns.",
    featured: false,
  },
  {
    id: "10",
    name: "Valley Mist at Dawn",
    price: 100,
    image: "/bolivian-ceramic-vase.png",
    category: "paintings",
    artist: "Ana Rodriguez",
    description: "Atmospheric painting of the Tarija valley shrouded in morning mist, with soft, ethereal lighting.",
    featured: false,
  },
  {
    id: "11",
    name: "Traditional Wedding Ceremony",
    price: 100,
    image: "/chapaco-wedding-blanket.png",
    category: "photography",
    artist: "Carlos Mendoza",
    description: "Documentary photography of traditional Chapaco wedding celebrations and cultural ceremonies.",
    featured: false,
  },
  {
    id: "12",
    name: "Ancestral Memory",
    price: 100,
    image: "/ancestral-mask.png",
    category: "paintings",
    artist: "Diego Fernandez",
    description: "Mixed media painting exploring themes of ancestral memory and cultural heritage in contemporary style.",
    featured: false,
  },
]

export const productDetails: Record<string, ProductDetail> = {
  "1": {
    ...products[0],
    story:
      "Painted from Ana's studio overlooking the Tarija valley, this piece captures a moment when the Andean peaks are bathed in golden light. She waited months for the perfect evening, when the clouds would part just so, allowing the sunset to paint the mountains in shades that no palette could fully capture.",
    dimensions: '24" H x 36" W',
    materials: "Oil on canvas, handmade wooden frame",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a contemporary artist whose work bridges traditional Chapaco themes with modern painting techniques. Her landscapes have become iconic representations of Tarija's natural beauty.",
  },
  "2": {
    ...products[1],
    story:
      "Carlos Mendoza's stunning photograph captures the essence of Tarija's grape harvest season. The morning light filtering through the grapevines creates a magical atmosphere, highlighting the intricate patterns of the vines and the vibrant colors of the harvest.",
    dimensions: '12" H x 16" W',
    materials: "High-resolution digital photograph",
    availability: "in-stock",
    artistBio:
      "Carlos Mendoza is a master weaver who has spent over 25 years perfecting the art of traditional Chapaco textiles. His work has been featured in cultural exhibitions across Bolivia and represents the finest of our weaving traditions.",
  },
  "3": {
    ...products[2],
    story:
      "This watercolor painting of wildflowers native to the Tarija valleys captures the delicate beauty of spring. Ana Rodriguez's delicate brushstrokes and soft, ethereal colors evoke the tranquility and serenity of the Andean landscape.",
    dimensions: '18" H x 24" W',
    materials: "Watercolor on paper",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "4": {
    ...products[3],
    story:
      "María Gonzalez's documentary photography series captures the daily life and traditions of Chapaco artisans in their workshops. This intimate glimpse into their craft and their world reveals the passion and dedication that go into creating these beautiful objects.",
    dimensions: '10" H x 12" W',
    materials: "High-resolution digital photograph",
    availability: "in-stock",
    artistBio:
      "María Gonzalez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "5": {
    ...products[4],
    story:
      "This large acrylic painting by Roberto Silva depicts the mystical mountains and spirits of the Andes in bold, contemporary style. The bold strokes and vibrant colors create a dynamic and powerful representation of the region's spiritual essence.",
    dimensions: '36" H x 48" W',
    materials: "Acrylic on canvas",
    availability: "in-stock",
    artistBio:
      "Roberto Silva is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "6": {
    ...products[5],
    story:
      "This dramatic oil painting by Ana Rodriguez depicts the majestic Andean condor soaring over the Tarija valley at dawn. The rich textures and bold colors create a powerful and awe-inspiring representation of the region's iconic bird.",
    dimensions: '24" H x 36" W',
    materials: "Oil on canvas",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "7": {
    ...products[6],
    story:
      "Carlos Mendoza's intimate black and white photography series features the faces and hands of Tarija's master artisans. This close-up look reveals the skill, dedication, and beauty of the traditional Chapaco craft.",
    dimensions: '10" H x 12" W',
    materials: "High-resolution digital photograph",
    availability: "in-stock",
    artistBio:
      "Carlos Mendoza is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "8": {
    ...products[7],
    story:
      "This contemporary abstract painting by José Vargas is inspired by pre-Columbian sacred geometry and Chapaco cultural symbols. The bold geometric shapes and rich textures create a contemporary interpretation of the region's ancient heritage.",
    dimensions: '24" H x 36" W',
    materials: "Acrylic on canvas",
    availability: "in-stock",
    artistBio:
      "José Vargas is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "9": {
    ...products[8],
    story:
      "María Gonzalez's close-up photography captures the skilled hands of traditional weavers creating intricate patterns. This intimate look reveals the artistry and dedication of the Chapaco craft.",
    dimensions: '10" H x 12" W',
    materials: "High-resolution digital photograph",
    availability: "in-stock",
    artistBio:
      "María Gonzalez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "10": {
    ...products[9],
    story:
      "This atmospheric painting by Ana Rodriguez depicts the Tarija valley shrouded in morning mist, with soft, ethereal lighting. The gentle brushstrokes and soft colors create a serene and contemplative representation of the region's natural beauty.",
    dimensions: '24" H x 36" W',
    materials: "Acrylic on canvas",
    availability: "in-stock",
    artistBio:
      "Ana Rodriguez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "11": {
    ...products[10],
    story:
      "Carlos Mendoza's documentary photography captures traditional Chapaco wedding celebrations and cultural ceremonies. This intimate look reveals the joy, celebration, and cultural significance of this important event.",
    dimensions: '12" H x 16" W',
    materials: "High-resolution digital photograph",
    availability: "in-stock",
    artistBio:
      "Carlos Mendoza is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
  "12": {
    ...products[11],
    story:
      "This mixed media painting by Diego Fernandez explores themes of ancestral memory and cultural heritage in contemporary style. The bold strokes and rich textures create a dynamic and thought-provoking representation of the region's past and present.",
    dimensions: '24" H x 36" W',
    materials: "Acrylic, watercolor, and mixed media on canvas",
    availability: "in-stock",
    artistBio:
      "Diego Fernandez is a talented artist dedicated to preserving and celebrating Chapaco cultural traditions through their craft.",
  },
}

export const featuredProducts = products.filter((product) => product.featured)

export const categories = [
  { value: "all", label: "All Categories" },
  { value: "paintings", label: "Paintings" },
  { value: "photography", label: "Photography" },
]

export const artists = [
  { value: "all", label: "All Artists" },
  { value: "Ana Rodriguez", label: "Ana Rodriguez" },
  { value: "Carlos Mendoza", label: "Carlos Mendoza" },
  { value: "María Gonzalez", label: "María Gonzalez" },
  { value: "Roberto Silva", label: "Roberto Silva" },
  { value: "José Vargas", label: "José Vargas" },
  { value: "Diego Fernandez", label: "Diego Fernandez" },
]

export const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-50", label: "Under $50" },
  { value: "50-75", label: "$50 - $75" },
  { value: "75-100", label: "$75 - $100" },
  { value: "100", label: "$100" },
]

export function getProductById(id: string): ProductDetail | undefined {
  return productDetails[id]
}
