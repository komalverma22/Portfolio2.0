'use client';

import React, { useState } from 'react';
import { Judson } from 'next/font/google';
import { Geist } from 'next/font/google';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { getFeaturedProjects, type Project } from '../../../data/projectData';

const judson = Judson({ subsets: ['latin'], weight: '700' });
const geist = Geist({ subsets: ['latin'], weight: '400' });

const cardBgColors = [
  "bg-[#FA9AC0]/56", // left & right
  "bg-[#FDF3C7]",    // center
];

const ProjectComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = getFeaturedProjects();
  const totalSlides = Math.ceil(projects.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const startIndex = currentSlide * 3;
    return projects.slice(startIndex, startIndex + 3);
  };

  const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => (
    <div
      className={`w-[439px] h-[502px] overflow-hidden transform transition-all duration-300 group p-[12px] shadow-[9px_9px_0px_0px_#670045] ${
        idx === 1 ? cardBgColors[1] : cardBgColors[0]
      }`}
    >
      {/* Project Image */}
      <div className="h-48 md:h-[214px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-[414px] h-[214px] object-cover transition-transform duration-500"
        />

        {/* Overlay buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <div>
        <h3
          className={`text-xl md:text-[37px] font-bold text-gray-800 py-[5px] ${judson.className}`}
          style={{
            color: "var(--landing-heading-text-color)",
          }}
        >
          {project.title}
        </h3>
        <p className={`text-sm md:text-[21px] text-black/70 pb-[8px] ${geist.className}`}>
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {project.technologies.slice(0, 6).map((tech, index) => (
            <div
              key={index}
              className="w-[96px] h-[31px] text-purple-700 text-xs px-2 py-1 text-center font-medium shadow-[-4px_4px_0px_0px_#670045]"
              style={{
                background: "var(--background)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-none px-0 ">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[21px] mb-15 justify-center">
        {getCurrentProjects().map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>

      {/* Navigation */}
      <div className='flex w-[1110px] h-[49px] items-center mx-auto  justify-between'>
      <div className="flex justify-center items-center gap-6 ">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            currentSlide === 0
              ? "bg-[#670045] border-[#891c53] text-white"
              : "border-[#891c53] text-[#891c53] bg-transparent"
          } transition-all duration-300`}
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>

       
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
            currentSlide === totalSlides - 1
              ? "bg-[#670045] border-[#891c53] text-white"
              : "border-[#891c53] text-[#891c53] bg-transparent"
          } transition-all duration-300`}
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center  font-bold text-lg ">
        <span className="text-[#891c53]">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-[#891c53] opacity-60"> / {String(totalSlides).padStart(2, '0')}</span>
      </div>
      </div>
    </div>
  );
};

export default ProjectComponent;