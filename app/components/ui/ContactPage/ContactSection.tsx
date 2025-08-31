import React from "react";
import { Pacifico } from 'next/font/google';
import { Judson } from 'next/font/google'
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
const judson = Judson({ subsets: ['latin'], weight: '700' })
const ContactSection = () => (
    
  <section className="w-full  px-60">
    <div className="max-w-7xl flex flex-col lg:flex-row items-center justify-center ">
      {/* Left: Heading & Paper Plane */}
      <div className="flex-1 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
        <div className="flex items-center relative">
          {/* Paper plane SVG */}
         <img src="./contact-aero.png" alt="" width={477} height={477} className="items-center"/>
          <div className="absolute">
            <div className={` text-[44px] font-bold text-black leading-none  ${pacifico.className}`} >
              <span>Get In</span>
            </div>
            <div className={`text-[99px] font-serif font-normal text-white leading-none -mt-4  ${judson.className}`}>
              Touch
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="flex  h-[562px]">
      <form className="flex-1 flex flex-col items-center justify-center gap-[10px] ">
        <div>
          <label className={`block text-[28px]  font-bold  text-[#1E1E1E]  ${judson.className}`}>Name</label>
          <input
            type="text"
            className="w-[394px] h-[54px] px-4 text-lg rounded-none bg-white shadow-[4px_4px_0px_0px_#800357]  border-[2px] border-[#800357] outline-none"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className={`block text-[28px]  font-bold  text-[#1E1E1E]  ${judson.className}`}>Email</label>
          <input
            type="email"
            className="w-[394px] h-[54px] px-4 text-lg rounded-none bg-white shadow-[4px_4px_0px_0px_#800357]  border-[2px] border-[#800357] outline-none"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className={`block text-[28px]  font-bold  text-[#1E1E1E]  ${judson.className}`}>Message</label>
          <textarea
            className="w-[394px] h-[110px] px-4 text-lg rounded-none bg-white shadow-[4px_4px_0px_0px_#800357]  border-[2px] border-[#800357] outline-none"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className={`w-[394px] h-[54px] px-4 bg-[#FFEDED] text-[#2d002b] text-[28px] font-bold shadow-[6px_6px_0px_0px_#891c53] mt-2 transition hover:bg-pink-200 ${judson.className} `}
        >
          Send Message
        </button>
      </form>
      </div>
    </div>
  </section>
);

export default ContactSection;