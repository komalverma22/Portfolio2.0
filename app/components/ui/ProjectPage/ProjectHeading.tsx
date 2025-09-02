"use client"
import React from 'react';
import Heading from '../Heading';
import Link from "next/link";
interface ProjectHeadingProps {
  showViewMore?: boolean;
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({ showViewMore = true }) => {
  return (
    <div className="flex  md:flex-row justify-between items-center  my-15 sm:my-25  mx-0  sm:mx-21">
      {/* Left side - Title with decorative elements */}
      <div className="relative mb-0 md:mb-0 ">
        <h1 className="">
          <Heading className=' px-3 sm:px-6 py-2 sm:py-3' bgImageSrc="heading-img.png">{"What I've Built"}</Heading>
        </h1>
        
        {/* Small decorative elements */}
      </div>
      
      {/* Right side - View More button (conditional) */}
      {showViewMore && (
        <button className="transform hover:scale-105 active:scale-95 transition-all duration-300
          w-[100px] sm:w-[230px]  h-[30px] sm:h-[58px] text-white  px-2 sm:px-8  py-1 sm:py-3  flex items-center  justify-center text-center gap-1 sm:gap-2 shadow-[5px_5px_0px_rgba(0,0,0,0.25),4px_5px_2px_rgba(236,132,181,0.87)]"
          style={{
            background: "var(--landing-content-button-color)"
          }}>
          <Link href="/projects" className='text-[14px]   sm:text-[26px]'> View All </Link> 
          <span>
            <img
              src="/view-more.png"
              alt=""
              className="w-[14px] h-[14px] sm:w-[22px] sm:h-[22px] "
            />
          </span>
        </button>
      )}
    </div>
  );
};

export default ProjectHeading;