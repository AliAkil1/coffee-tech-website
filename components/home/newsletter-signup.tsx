"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    console.log("Subscribing email:", email)
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className="max-w-3xl mx-auto text-center">
      <Mail className="h-12 w-12 mx-auto mb-4" />
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-lg mb-8">
        Subscribe to our newsletter for the latest coffee technology innovations and research insights.
      </p>

      {submitted ? (
        <div className="bg-white/10 rounded-lg p-6">
          <p className="text-xl font-medium">Thank you for subscribing!</p>
          <p className="mt-2">You'll receive our next newsletter in your inbox.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}

