"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Judson } from "next/font/google"
import { Geist } from "next/font/google"
// import { getFeaturedDesigns, type Design } from "../../../data/designData"

const judson = Judson({ subsets: ["latin"], weight: "700" })
const geist = Geist({ subsets: ["latin"], weight: "400" })

// Temporary data - replace with your actual data import
const designData = [
  {
    id: '1',
    title: 'Toolfolio Redesign',
    subtitle: 'UI Design | Hero Section',
    year: '2025 Aug',
    image: '/toolfolio-design.jpg',
    description: 'A personal photography project capturing candid moments and emotions through artistic lens work.',
    category: 'Hero Section'
  },
  {
    id: '2',
    title: 'Left Alignment Hero Section',
    subtitle: 'UI Design | Hero Section',
    year: '2025 Aug',
    image: '/recreated-figma.png',
    description: 'A left-aligned hero section with bold heading, subtext, and CTA—clean, modern, and focused.',
    category: 'Hero Section'
  },
  {
    id: '3',
    title: 'Widget',
    subtitle: 'UI Design | Widget Section',
    year: '2025 Aug',
    image: '/widgets-figma.jpg',
    description: 'A minimalist approach to investment platform design focusing on simplicity and user experience.',
    category: 'Widget Section'
  }
,

//   {
//     id: '4',
//     title: 'MinimalVest',
//     subtitle: 'UI Design | Hero Section',
//     year: '2025 Aug',
//     image: '/portfolio-design.png',
//     description: 'A minimalist approach to investment platform design focusing on simplicity and user experience.',
//     category: 'Hero Section'
//   }
// ,

  {
    id: '5',
    title: 'Recreated Hero Section',
    subtitle: 'UI Design | Hero Section',
    year: '2025 Aug',
    image: '/emails-design.jpg',
    description: 'A bold hero section with a clear heading, subtext, and CTA—clean, modern, and engaging.',
    category: 'Hero Section'
  }
,

  {
    id: '6',
    title: 'Profile Card',
    subtitle: 'UI Design',
    year: '2025 Aug',
    image: '/profile-figma.jpg',
    description: 'A modern profile card with image, name, and short description—clean, elegant, and user-friendly',
    category: 'Profile Card'
  }
]

const cardBgColors = [
 
  "bg-[#FA9AC0]/56", // left & right
  "bg-[#FDF3C7]", 
]

const DesignShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState<any>(null)
  const designs = designData

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (design: any) => {
    setSelectedDesign(design)
  }

  const closeModal = () => {
    setSelectedDesign(null)
  }

  const DesignCard: React.FC<{ design: any; index: number }> = ({ design, index }) => {
    const getCardColor = () => {
      return index % 2 === 0 ? cardBgColors[0] : cardBgColors[1]
    }

    return (
      <div
        className={`w-full max-w-md mx-auto cursor-pointer transform transition-all duration-700 group ${getCardColor()} p-4 md:p-3 shadow-[6px_6px_0px_0px_#670045] ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}
        style={{
          transitionDelay: `${index * 150}ms`
        }}
        onClick={() => openModal(design)}
      >
        {/* Design Image */}
     <div className="relative overflow-hidden mb-3 rounded-sm">
  <img
    src={design.image || "/placeholder.svg"}
    alt={design.title}
    className="w-full h-48 md:h-64 object-contain transition-transform duration-300 group-hover:scale-105"
  />
</div>


        {/* Design Content */}
        <div className="space-y-1">
          <div className="flex justify-between items-start">
            <h3
              className={`text-lg md:text-xl font-bold text-gray-800 ${judson.className}`}
              style={{
                color: "var(--landing-heading-text-color)",
              }}
            >
              {design.title}
            </h3>
            <span className={`text-sm text-gray-600 ml-2 ${geist.className}`}>{design.year}</span>
          </div>
          
          <p className={`text-sm md:text-base text-gray-600 ${geist.className}`}>
            {design.subtitle}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Main Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8  pb-6" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {designs.map((design, index) => (
            <DesignCard key={design.id} design={design} index={index} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDesign && (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-hidden relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                <div>
                  <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-2 ${judson.className}`}>
                    {selectedDesign.title}
                  </h2>
                  <p className={`text-lg text-gray-600 mb-2 ${geist.className}`}>
                    {selectedDesign.subtitle}
                  </p>
                </div>
                {/* <span className="text-lg text-gray-500 pr-7">{selectedDesign.year}</span> */}
              </div>

              {/* Large Image */}
             <div className="mb-6 flex items-center justify-center  rounded-lg">
  <img
    src={selectedDesign.image || "/placeholder.svg"}
    alt={selectedDesign.title}
    className="w-full h-64 md:h-96 object-contain rounded-lg"
  />
</div>

              {/* Description */}
              <div className="space-y-4">
                <p className={`text-base md:text-lg text-gray-700 leading-relaxed ${geist.className}`}>
                  {selectedDesign.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {selectedDesign.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DesignShowcase