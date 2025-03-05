import Image from "next/image"
import ContactForm from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact Coffee Tech Innovations"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Have questions about our coffee technology? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Innovation Drive
                    <br />
                    Tech City, TC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@coffeetech.com
                    <br />
                    support@coffeetech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Main: (123) 456-7890
                    <br />
                    Support: (123) 456-7891
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Office Location Map"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about our products and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "What makes your coffee technology different?",
              answer:
                "Our technology combines advanced sensors, AI-powered analysis, and precision control systems to optimize every variable in the coffee brewing process. Unlike conventional equipment, our systems adapt to specific beans and desired flavor profiles.",
            },
            {
              question: "Do you offer international shipping?",
              answer:
                "Yes, we ship our products worldwide. International shipping rates and delivery times vary by location. Please contact our sales team for specific information about shipping to your country.",
            },
            {
              question: "How do I get technical support for my product?",
              answer:
                "Technical support is available through multiple channels. You can contact our support team via email at support@coffeetech.com, call our support line at (123) 456-7891, or use the live chat feature on our website during business hours.",
            },
            {
              question: "Do you offer training for your brewing systems?",
              answer:
                "Yes, we provide comprehensive training for all our brewing systems. This includes initial setup training, advanced operation techniques, and maintenance procedures. Training can be conducted virtually or in-person depending on your location and needs.",
            },
            {
              question: "What warranty do your products come with?",
              answer:
                "All our products come with a standard 2-year warranty covering manufacturing defects and normal use failures. Extended warranty options are available for purchase. Please refer to the specific product documentation for detailed warranty information.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

