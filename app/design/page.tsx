import React from 'react'
import DesignHeading from './DesignHeading'
import { Judson } from 'next/font/google'
import { Geist } from 'next/font/google';
import DesignContent from './DesignContent';
const judson = Judson({ subsets: ['latin'], weight: '400' })
const geist = Geist({ subsets: ['latin'], weight: '400' })
const Design = () => {
  return (
    <div 
      className='min-h-screen bg-cover bg-top bg-no-repeat'
      style={{ 
        backgroundImage: "url('/landing-img.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <div className='pt-32 md:pt-43 px-3 md:px-10 pb-5'>
        <DesignHeading/>
        
        {/* Centered content below heading */}
        <div className='flex justify-center mt-8 md:mt-12'>
          <div className={`text-center max-w-4xl text-sm md:text-2xl lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-gray-800/80 ${geist.className}`}>
            A space to share what I create, explore, and enjoy.
            Here I mix ideas, styles, and everything I&apos;ve tried. It&apos;s raw, personal, and always changing.
          </div>
        </div>
      </div>
      <DesignContent/>
    </div>
  )
}

export default Design