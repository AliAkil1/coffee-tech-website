"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, Download, ThumbsUp, ThumbsDown } from "lucide-react"

export default function ResearchTool() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  // Mock research results
  const mockResults = [
    {
      id: 1,
      title: "Impact of Water Temperature on Extraction Efficiency",
      summary:
        "Research indicates that water temperature between 92-96°C optimizes extraction for medium to dark roasts, while lighter roasts benefit from slightly lower temperatures (88-92°C) to preserve delicate flavor compounds.",
      source: "Journal of Coffee Research, 2023",
      recommendation:
        "For light roasts, start with 89°C water temperature and adjust based on taste. For medium to dark roasts, maintain 94°C for optimal extraction.",
      date: "2023-04-15",
    },
    {
      id: 2,
      title: "Mineral Composition in Brewing Water",
      summary:
        "A comprehensive study of water mineral content shows that specific ratios of magnesium (15-30ppm) to calcium (40-70ppm) enhance sweetness perception and mouthfeel in brewed coffee.",
      source: "International Coffee Science Foundation, 2023",
      recommendation:
        "Use water with approximately 20ppm magnesium and 50ppm calcium for balanced extraction. Consider remineralizing filtered water to achieve optimal levels.",
      date: "2023-02-22",
    },
    {
      id: 3,
      title: "Grind Size Distribution and Extraction Uniformity",
      summary:
        "New research using advanced particle analysis shows that narrower grind size distribution significantly improves extraction uniformity and reduces channeling in pour-over brewing methods.",
      source: "Coffee Technology Quarterly, 2023",
      recommendation:
        "Invest in grinders with improved particle size consistency. For pour-over methods, slightly coarser grinds with narrow distribution outperform finer grinds with wider distribution.",
      date: "2023-01-10",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    // Simulate API call delay
    setTimeout(() => {
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
      {/* Search Interface */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee brewing research (e.g., water temperature, extraction time)"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
            <button type="submit" className="btn-primary" disabled={isSearching}>
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </form>

      {/* Results Display */}
      {isSearching ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{searchResults.length} Research Findings</h3>
            <button className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
              <Download className="h-4 w-4 mr-1" />
              Export Results
            </button>
          </div>

          {searchResults.map((result) => (
            <div key={result.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <h4 className="text-lg font-semibold mb-2">{result.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Source: {result.source} | Published: {result.date}
              </p>
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Research Summary:</h5>
                <p className="text-gray-600 dark:text-gray-300">{result.summary}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-md mb-3">
                <h5 className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Practical Recommendation:</h5>
                <p className="text-blue-600 dark:text-blue-400">{result.recommendation}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful
                  </button>
                  <button className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    Not Helpful
                  </button>
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  View Full Research
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 mb-2">No results found for "{searchQuery}"</p>
          <p className="text-gray-500 dark:text-gray-400">
            Try different keywords or browse our featured research below
          </p>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">Enter a search term to explore coffee brewing research</p>
        </div>
      )}
    </div>
  )
}

