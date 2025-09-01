"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Judson } from "next/font/google"
import { Geist } from "next/font/google"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import { getFeaturedProjects, type Project } from "../../../data/projectData"

const judson = Judson({ subsets: ["latin"], weight: "700" })
const geist = Geist({ subsets: ["latin"], weight: "400" })

const cardBgColors = [
  "bg-[#FA9AC0]/56", // left & right
  "bg-[#FDF3C7]", // center
]

const ProjectComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)
  const projects = getFeaturedProjects()

  useEffect(() => {
    const computeItemsPer = () => {
      const w = typeof window !== "undefined" ? window.innerWidth : 1024
      if (w < 640)
        setItemsPerSlide(1) // < phone
      else if (w < 768)
        setItemsPerSlide(1) // < md
      else if (w < 1024)
        setItemsPerSlide(2) // md to < lg
      else setItemsPerSlide(3) // >= lg
    }
    computeItemsPer()
    window.addEventListener("resize", computeItemsPer)
    return () => window.removeEventListener("resize", computeItemsPer)
  }, [])

  const totalSlides = Math.ceil(projects.length / itemsPerSlide)

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(totalSlides - 1, 0)))
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentProjects = () => {
    const startIndex = currentSlide * itemsPerSlide
    return projects.slice(startIndex, startIndex + itemsPerSlide)
  }

  const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => (
    <div
      className={`w-full h-auto md:w-[439px] md:h-[502px] overflow-hidden transform transition-all duration-300 group px-3 md:px-[12px] py-[12px]  md:py-[12px] shadow-[6px_6px_0px_0px_#670045] ${
        idx === 1 ? cardBgColors[1] : cardBgColors[0]
      } mx-auto`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-44 md:h-[214px] ">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 rounded-sm"
        />

        {/* Overlay buttons */}
        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            className="bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
          <a
            href={project.liveUrl}
            className="bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="">
        <h3
          className={`text-xl md:text-[32px] font-bold text-gray-800 py-1 ${judson.className}`}
          style={{
            color: "var(--landing-heading-text-color)",
          }}
        >
          {project.title}
        </h3>
        <p className={`text-xs md:text-[19px] text-black/70 pb-2 ${geist.className}`}>{project.description}</p>

        {/* Technology Tags */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {project.technologies.slice(0, 10).map((tech, index) => (
            <div
              key={index}
              className="w-full h-[28px] md:w-[96px] md:h-[31px]  flex justify-center items-center text-xs px-2 py-1 text-center font-semibold shadow-[-4px_4px_0px_0px_#670045] border-[2px] border-[var(--landing-heading-text-color)]"
              style={{
                background: "var(--background)",
                color:"var(--landing-heading-text-color)"
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative w-full max-w-none px-0 md:px-4 lg:px-0">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-6 md:gap-[21px] mb-8 justify-center">
        {getCurrentProjects().map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-row md:flex-row items-center px-5 md:px-30 justify-between gap-4 my-10 md:my-16">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 ${
              currentSlide === 0
                ? "bg-[#800357] border-[#891c53] text-white"
                : "border-[#891c53] text-[#891c53] bg-transparent"
            } transition-all duration-300`}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Indicators */}
          {/* <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3.5 h-3.5 rounded-full border-2 border-[#891c53] transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#891c53] scale-125"
                    : "bg-transparent"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 ${
              currentSlide === totalSlides - 1
                ? "bg-[#891c53] border-[#891c53] text-white"
                : "border-[#891c53] text-[#891c53] bg-transparent"
            } transition-all duration-300`}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center font-bold text-base md:text-lg mt-2 md:mt-0">
          <span className="text-[#891c53]">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-[#891c53] opacity-60"> / {String(totalSlides).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponent
