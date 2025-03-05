import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/products/product-card"

export default function ProductsPage() {
  const productCategories = [
    {
      id: "brewing-equipment",
      name: "Brewing Equipment",
      description: "Advanced brewing systems with precision temperature and flow control",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "sensors",
      name: "Sensors & Monitoring",
      description: "Cutting-edge sensors for real-time analysis of brewing parameters",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "software",
      name: "Software Solutions",
      description: "AI-powered applications for recipe development and brewing optimization",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Specialized tools and accessories to complement our brewing systems",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const products = [
    {
      id: 1,
      name: "BrewSense Pro",
      description: "AI-powered brewing system with temperature precision to 0.1°C",
      image: "/placeholder.svg?height=300&width=400",
      category: "Brewing Equipment",
    },
    {
      id: 2,
      name: "AromaScan",
      description: "Advanced aroma detection sensors for perfect extraction timing",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sensors",
    },
    {
      id: 3,
      name: "BrewCloud",
      description: "Cloud-based coffee profile management and recipe optimization",
      image: "/placeholder.svg?height=300&width=400",
      category: "Software Solutions",
    },
    {
      id: 4,
      name: "TDS Analyzer",
      description: "Real-time total dissolved solids measurement for extraction control",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sensors",
    },
    {
      id: 5,
      name: "PrecisionGrind",
      description: "Smart grinder with particle size analysis and adjustment",
      image: "/placeholder.svg?height=300&width=400",
      category: "Brewing Equipment",
    },
    {
      id: 6,
      name: "FlavorWheel Pro",
      description: "Interactive software for detailed flavor profiling and analysis",
      image: "/placeholder.svg?height=300&width=400",
      category: "Software Solutions",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Coffee Technology Products"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Innovations</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Discover our cutting-edge coffee technology solutions designed to revolutionize the brewing experience.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our range of innovative coffee technology solutions across multiple categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="card overflow-hidden">
              <div className="relative h-40 mb-4">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
              <Link
                href={`/products#${category.id}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
              >
                View Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our innovative coffee technology solutions that are changing the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovation Timeline</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our journey of revolutionizing coffee technology through continuous innovation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {[
              {
                year: 2023,
                title: "BrewSense Pro Launch",
                description: "Released our flagship AI-powered brewing system",
              },
              {
                year: 2022,
                title: "AromaScan Technology",
                description: "Pioneered new aroma detection sensors for extraction timing",
              },
              {
                year: 2021,
                title: "BrewCloud Platform",
                description: "Launched our cloud-based coffee profile management system",
              },
              {
                year: 2019,
                title: "Company Founded",
                description: "Started with a mission to revolutionize coffee brewing technology",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-lg">
                  {item.year}
                </div>
                <div className="w-5/12 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 ml-4 mr-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a sneak peek at our upcoming innovations in coffee technology.
          </p>
        </div>

        <div className="relative h-80 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Upcoming Product"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">BrewSense Ultra</h3>
              <p className="text-xl mb-6">
                Our next-generation brewing system with enhanced AI capabilities and expanded sensor array. Coming Q3
                2023.
              </p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

