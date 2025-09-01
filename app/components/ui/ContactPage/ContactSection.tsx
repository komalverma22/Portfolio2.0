import React from "react";
import { Pacifico } from 'next/font/google';
import { Judson } from 'next/font/google'
import { Geist } from 'next/font/google'
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const judson = Judson({ subsets: ['latin'], weight: '700' })
const geist = Geist({ subsets: ['latin'], weight: '500' })
const ContactSection = () => (
    
  <section className="w-full  px-1 md:px-60 ">
    <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-center h-[500px] ">
      {/* Left: Heading & Paper Plane */}
     <div className="flex-1 flex flex-col justify-center items-center lg:items-start mt-3 md:mt-3 mb-0 lg:mb-0">
  <div className="flex flex-col items-center">
    <div className={`text-[30px] md:text-[44px] font-bold text-black  ${pacifico.className}`}>
      <span>Get In</span>
    </div>
    <div className={`text-[50px] md:text-[99px] font-serif font-normal text-white leading-none     -mt-6 md:-mt-12 ${judson.className}`}>
      Touch
    </div>
    {/* Plane image */}
    <div className="mt-4">
      {/* <img src="./contact-aero.png" alt="" width={120} height={80} /> */}
    </div>
  </div>
</div>

      {/* Right: Contact Form */}
      <div className="flex  h-[330px] md:h-[530px]">
      <form className="flex-1 flex flex-col items-start  md:items-center justify-center gap-[10px] ">
        <div>
          <label className={`block text-[24px] md:text-[28px]  font-bold  text-[#1E1E1E]  ${judson.className}`}>Name</label>
          <input
            type="text"
            className={`w-[310px] md:w-[394px] h-[40px] md:h-[54px] px-2 text-md rounded-none bg-white shadow-[4px_4px_0px_0px_#800357]  border-[2px] border-[#800357] outline-none ${geist.className}`}
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className={`block text-[24px] md:text-[28px]  font-bold  text-[#1E1E1E]  ${judson.className}`}>Email</label>
          <input
            type="email"
            className={` w-[310px] md:w-[394px] h-[40px] md:h-[54px] px-2 text-md rounded-none bg-white shadow-[4px_4px_0px_0px_#800357]  border-[2px] border-[#800357] outline-none ${geist.className}`}
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className={`block text-[24px] md:text-[28px]  font-bold  text-[#1E1E1E]  ${geist.className}`}>Message</label>
          <textarea
            className={`w-[310px] md:w-[394px] h-[80px] md:h-[110px] py-2 px-2 text-md rounded-none bg-white shadow-[4px_4px_0px_0px_#800357]  border-[2px] border-[#800357] outline-none ${geist.className}`}
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className={` w-[310px] md:w-[394px] h-[49px] md:h-[54px] px-4 bg-[#FFEDED] text-[#2d002b] text-[22px] md:text-[28px] font-bold shadow-[6px_6px_0px_0px_#891c53] mt-2 transition hover:bg-pink-200 ${judson.className} `}
        >
          Send Message
        </button>
      </form>
      </div>
    </div>
  </section>
);

export default ContactSection;