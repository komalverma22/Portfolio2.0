import React from 'react';
import Heading from '../Heading';

const ProjectHeading: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-25  mx-21">
      {/* Left side - Title with decorative elements */}
      <div className="relative mb-6 md:mb-0 ">
     
      
        
        <h1 className="">
       
   <Heading className='px-6 py-3' bgImageSrc="heading-img.png">What I’ve Built</Heading>
        </h1>
        
        {/* Small decorative elements */}
      
      </div>
      
      {/* Right side - View More button */}
         <button className="w-[230px] h-[58px] text-white  px-8 py-3  transition flex items-center  justify-center text-center gap-2 shadow-[5px_5px_0px_rgba(0,0,0,0.25),4px_5px_2px_rgba(236,132,181,0.87)]"
      style={{
        background: "var(--landing-content-button-color)"
      }}>
      <span className='text-[26px]'> View All </span> 
        <span>
          <img src="/hire-btn-logo.png" alt="" width={22} height={22}/>
        </span>
      </button>
    </div>
  );
};

export default ProjectHeading;