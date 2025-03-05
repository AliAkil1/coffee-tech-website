import Image from "next/image"
import { Award, Coffee, Leaf, Users } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & CEO",
      bio: "Ph.D. in Food Science with 15 years of experience in coffee research and technology development.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Former Silicon Valley engineer with expertise in sensor technology and machine learning applications.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emma Patel",
      role: "Head of Research",
      bio: "Specializes in flavor chemistry and extraction optimization with multiple published papers.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Wilson",
      role: "Product Development",
      bio: "Award-winning product designer with background in both industrial design and coffee industry.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="About Coffee Tech Innovations"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">Meet the team behind the coffee technology revolution.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=400&width=600" alt="Our Mission" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To revolutionize coffee brewing through innovative technology that enhances precision, consistency, and
                flavor extraction, making exceptional coffee experiences accessible to all.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A world where technology and coffee artistry converge, where data-driven brewing decisions elevate the
                coffee experience, and where innovation continuously pushes the boundaries of what's possible in coffee
                extraction and flavor development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From a small research project to a leading coffee technology innovator.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {[
              {
                year: 2019,
                title: "Company Founded",
                description: "Started as a research project at the University of Food Science",
              },
              { year: 2020, title: "First Prototype", description: "Developed our first brewing sensor prototype" },
              {
                year: 2021,
                title: "Seed Funding",
                description: "Secured $2M in seed funding to expand research and development",
              },
              {
                year: 2022,
                title: "First Product Launch",
                description: "Released our first commercial product to critical acclaim",
              },
              {
                year: 2023,
                title: "Expansion",
                description: "Expanded team and launched our comprehensive product line",
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

      {/* Team */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the experts behind our coffee technology innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide our innovation and company culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="mx-auto bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Coffee className="h-8 w-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Obsession</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We are relentlessly committed to quality in every aspect of our products and research.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Leaf className="h-8 w-8 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We design our products with environmental responsibility and resource efficiency in mind.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto bg-amber-100 dark:bg-amber-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-amber-600 dark:text-amber-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We continuously push boundaries and challenge conventional thinking in coffee technology.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in the power of diverse perspectives and collaborative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading organizations in coffee and technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 8].map((i) => (
            <div key={i} className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Image
                src={`/placeholder.svg?height=80&width=160`}
                alt={`Partner ${i}`}
                width={160}
                height={80}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

