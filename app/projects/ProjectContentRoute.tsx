"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Judson } from "next/font/google"
import { Geist } from "next/font/google"
import { Github, ExternalLink } from "lucide-react"
import { getFeaturedProjects, type Project } from "../data/projectData"

const judson = Judson({ subsets: ["latin"], weight: "700" })
const geist = Geist({ subsets: ["latin"], weight: "400" })

const cardBgColors = [
  "bg-[#FA9AC0]/56", // alternating color 1
  "bg-[#FDF3C7]", // alternating color 2
]

const ProjectComponentRoute: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const projects = getFeaturedProjects()

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const getCardColor = () => {
      return index % 2 === 0 ? cardBgColors[0] : cardBgColors[1]
    }

    return (
      <div
        className={`w-full h-auto md:w-[439px] md:h-[502px] overflow-hidden transform transition-all duration-700 group px-3 md:px-[12px] py-[12px] md:py-[12px] shadow-[6px_6px_0px_0px_#670045] ${getCardColor()} mx-auto ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}
        style={{
          transitionDelay: `${index * 150}ms` // Staggered animation
        }}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden h-44 md:h-[214px]">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 rounded-sm group-hover:scale-105"
          />

          {/* Overlay buttons - Desktop only */}
          <div className="absolute top-2 right-2 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
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
          {/* Mobile: Title with icons side by side */}
          <div className="flex justify-between items-center md:block">
            <h3
              className={`text-xl md:text-[32px] font-bold text-gray-800 py-1 ${judson.className}`}
              style={{
                color: "var(--landing-heading-text-color)",
              }}
            >
              {project.title}
            </h3>
            
            {/* Mobile icons - visible only on mobile */}
            <div className="flex space-x-2 md:hidden">
              <a
                href={project.githubUrl}
                className="text-[#510237] rounded-full hover:bg-[#670045] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={project.liveUrl}
                className="text-[#510237] rounded-full hover:bg-[#670045] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <p className={`text-xs md:text-[19px] text-black/70 pb-2 ${geist.className}`}>
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {project.technologies.slice(0, 10).map((tech, techIndex) => (
              <div
                key={techIndex}
                className="w-full h-[28px] md:w-[96px] md:h-[31px] flex justify-center items-center text-xs px-2 py-1 text-center font-semibold shadow-[-4px_4px_0px_0px_#670045] border-[2px] border-[var(--landing-heading-text-color)] transition-transform duration-300 hover:scale-105"
                style={{
                  background: "var(--background)",
                  color: "var(--landing-heading-text-color)"
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-none px-0 md:px-4 lg:px-0">
      {/* Projects Grid - All projects displayed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[21px] justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default ProjectComponentRoute