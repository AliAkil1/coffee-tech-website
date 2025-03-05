import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card overflow-hidden flex flex-col">
      <div className="relative h-48 mb-4">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{product.description}</p>
      <Link
        href={`/products/${product.id}`}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
      >
        Learn More
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}

