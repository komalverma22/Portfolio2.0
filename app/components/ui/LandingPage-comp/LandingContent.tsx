import React from 'react';
import { Pacifico } from 'next/font/google';
import { Judson } from 'next/font/google'
import { Geist } from 'next/font/google';
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const judson = Judson({ subsets: ['latin'], weight: '700' })
const geist = Geist({ subsets: ['latin'], weight: '500' })
const LandingContent = () => (
  <div className="relative flex-10 flex flex-col items-center md:items-start mt-[-40px] md:mt-[-130px]">
    <div className="px-2 py-6 md:px-0 md:py-0  w-full max-w-2xl">
      <div className="mb-2 flex items-center justify-start md:justify-start">
               <h2 className={`font-bold text-2xl md:text-[37px] flex items-center gap-0  ${pacifico.className}`}
               style={
                {color: "var(--landing-content-intro)"}
               }>
         Hey I’m Coffee 
      <span>
 <img 
  src="/coffee.png" 
  alt="coffee" 
  className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px]" 
/>

</span>

        </h2>
      </div>
      <div className="mb-0">
        <span className={`px-[9px] py-0  font-extrabold  text-[28px] md:text-[52px]  ${judson.className}`}
        style={{
            background: "var(--landing-heading-bg-color)",
            color:"var(--landing-heading-text-color)"
        }}>
          A Full-Stack
        </span>
      </div>
      <div className="mb-2">
        <span className={`px-[9px] py-0  font-extrabold  text-[28px] md:text-[52px]  ${judson.className}`}
        style={{
            background: "var(--landing-heading-bg-color)",
            color:"var(--landing-heading-text-color)"
        }}>
            <span style={{
                color:"var(--landing-heading-text-orange)"
            }}>
                Developer 
        </span>
        <span> </span>
          and 
           <span> </span>
            <span style={{
                color:"var(--landing-heading-text-orange)"
            }}>
                Developer 
        </span>
        </span>
      </div>
      <h3 className={` text-xl md:text-[36px] mb-2  ${judson.className}`}>
        Explore my Work & Projects
      </h3>
      <p className={`mb-4 sm:mb-10 text-[15px] md:text-[21px] font-medium  tracking-tight ${geist.className}`}
      style={
                {color: "var(--landing-content-intro)"}
               }>
        I am a skilled and passionate web designer with experience in creating visually appearing and user-friendly websites. I enjoy learning new technologies and building digital products that solve real problems and bring joy to users.
      </p>
      <button className=" w-[150px] md:w-[230px] h-[40px] md:h-[58px] text-white    px-6 md:px-8 py-3  transition flex items-center  justify-center text-center gap-2 shadow-[5px_5px_0px_rgba(0,0,0,0.25),4px_5px_2px_rgba(236,132,181,0.87)]"
      style={{
        background: "var(--landing-content-button-color)"
      }}>
      <span className='text-[16px] sm:text-[26px]'> Hire Me </span> 
        <span>
          <img src="/hire-btn-logo.png" alt="" width={22} height={22}/>
        </span>
      </button>
    </div>
   
  </div>
);

export default LandingContent;