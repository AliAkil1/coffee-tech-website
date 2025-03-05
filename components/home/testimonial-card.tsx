import Image from "next/image"

interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  avatar: string
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.author}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-medium text-lg">{testimonial.author}</p>
          <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
    </div>
  )
}

