import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Coffee, Cpu, Star } from "lucide-react"
import NewsletterSignup from "@/components/home/newsletter-signup"
import TestimonialCard from "@/components/home/testimonial-card"
import ProductCard from "@/components/products/product-card"

export default function Home() {
  const featuredProducts = [
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
  ]

  const testimonials = [
    {
      id: 1,
      quote: "The BrewSense Pro revolutionized our café operations. Consistency is now guaranteed with every cup.",
      author: "Maria Chen",
      position: "Head Barista, Urban Brew",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      quote: "Coffee Tech's innovations have helped us reduce waste by 30% while improving customer satisfaction.",
      author: "James Wilson",
      position: "Owner, Specialty Coffee Co.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Coffee Technology Innovation"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Brewing Innovation</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Where cutting-edge technology meets the art of coffee brewing. Revolutionizing the coffee experience through
            precision and innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary">
              Explore Our Innovations
            </Link>
            <Link
              href="/research"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md transition-colors"
            >
              Research Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Revolutionizing Coffee Technology</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We combine advanced engineering, data science, and a passion for coffee to create technologies that elevate
            brewing precision, consistency, and flavor extraction to unprecedented levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="mx-auto bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Precision Brewing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our technologies control brewing variables with unprecedented accuracy, ensuring perfect extraction every
              time.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto bg-amber-100 dark:bg-amber-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 text-amber-600 dark:text-amber-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI-powered systems that learn and adapt to your preferences, creating personalized brewing profiles.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Research-Backed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All our innovations are grounded in scientific research and extensive testing in real-world conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Innovations</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our groundbreaking coffee technologies that are setting new standards in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from coffee professionals who have transformed their brewing with our technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Research Insights Preview */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Research Insights</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our AI-powered research tool continuously analyzes the latest coffee brewing studies to provide actionable
              insights.
            </p>
            <div className="mb-8 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-2">Recent Finding: Water Mineral Composition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                New research indicates that specific mineral ratios in water can enhance flavor compounds in light roast
                coffees by up to 27%.
              </p>
            </div>
            <Link href="/research" className="btn-primary">
              Explore Research Tool
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Research Insights Dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our innovations have been recognized by leading industry organizations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="mb-3 mx-auto">
                <Star className="h-12 w-12 text-amber-500" />
              </div>
              <p className="font-medium">Award {i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section bg-blue-600 text-white">
        <NewsletterSignup />
      </section>
    </>
  )
}

