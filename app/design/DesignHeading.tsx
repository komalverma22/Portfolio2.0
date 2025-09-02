import React from 'react'
import Heading from '../components/ui/Heading'
// import ProjectHeading from '../components/ui/ProjectPage/ProjectHeading'

const DesignHeading = () => {
  return (
    <div>
       <div className="flex  md:flex-row justify-center items-center  my-0 sm:my-0  mx-0  sm:mx-21">
      {/* Left side - Title with decorative elements */}
      <div className="relative mb-0 md:mb-0 ">
        <h1 className="">
          <Heading className=' px-8 sm:px-25 py-2 sm:py-2' bgImageSrc="heading-img.png">{"Designs"}</Heading>
        </h1>
        
        {/* Small decorative elements */}
      </div>
      
      {/* Right side - View More button (conditional) */}
      
       
        {/* //   <Link href="/projects" className='text-[14px]   sm:text-[26px]'> View All </Link>  */}
          <span>
            <img
              src="/view-more.png"
              alt=""
              className="w-[14px] h-[14px] sm:w-[22px] sm:h-[22px] "
            />
          </span>
       
    </div>
    </div>
  )
}

export default DesignHeading
