import React from 'react'
import { Pacifico } from 'next/font/google';
import { Geist } from 'next/font/google';
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const geist = Geist({ subsets: ['latin'], weight: '500' })
const BlogHeading = () => {
  return (
    <div className={`mt-17 md:mt-30 px-5 md:px-40 ${pacifico.className}`}
      style={{
        color: "var(--landing-heading-text-color)"
      }}
    >
      <div className='flex'>
      <h1 className='text-[35px] md:text-[64px] py-10 leading-[30px] md:leading-[70px]'>My Blog <br/> Space </h1>
     <img 
  src="/blog2.png" 
  alt="" 
  className=" mt-[10px] md:mt-[-50px] w-[90px] h-[150px] sm:w-[200px] sm:h-[300px]" 
/>

      </div>
      <div className={`flex text-[20px] ${geist.className}`}
      style={
        {color: "var(--foreground)"}
      }>
        Coming Soon......
      </div>
    </div>
  )
}

export default BlogHeading
