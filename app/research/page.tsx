import Image from "next/image"
import ResearchTool from "@/components/research/research-tool"

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Coffee Research & Insights"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Research & Insights</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Explore the latest coffee brewing research with our AI-powered research tool.
          </p>
        </div>
      </section>

      {/* Research Tool Introduction */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Research Tool</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our proprietary web scraper and AI analysis tool continuously monitors and synthesizes the latest coffee
              brewing research from around the world.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Aggregates research from scientific journals, industry publications, and academic sources",
                "Uses advanced AI to analyze and summarize complex findings",
                "Provides practical recommendations based on scientific evidence",
                "Updated daily with the latest research",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=400&width=600" alt="AI Research Tool" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Research Tool Interface */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Coffee Research</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Use our research tool to discover insights on specific coffee brewing topics.
          </p>
        </div>

        <ResearchTool />
      </section>

      {/* Methodology */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Methodology</h2>

          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our web scraper continuously monitors over 200 scientific journals, academic databases, and industry
                publications for new coffee brewing research. We collect data from peer-reviewed sources to ensure
                reliability.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We use advanced natural language processing and the Deepseek API to analyze and synthesize research
                findings. Our AI is trained to identify key insights, methodologies, and practical implications from
                complex scientific papers.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Practical Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our system translates scientific findings into actionable recommendations for coffee professionals and
                enthusiasts. We focus on practical applications that can improve brewing techniques and outcomes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Continuous Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The database is updated daily with new research, ensuring you always have access to the latest findings
                and insights in coffee brewing science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

