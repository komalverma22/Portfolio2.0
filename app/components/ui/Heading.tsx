import React from 'react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  bgImageSrc?: string; // Add this prop for background image
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  style = {},
  bgImageSrc,
}) => (
  <div className="relative flex justify-center items-center  
              w-auto    sm:w-[449px]       h-[20px] sm:h-[70px] 
              " >
    {bgImageSrc && (
     <img
  src={bgImageSrc}
  alt=""
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none  mt-2 sm:mt-6 
             w-[170px] h-[150px] sm:w-[280px] sm:h-[280px] md:w-[386px] md:h-[350px]"
  style={{ zIndex: 0 }}
/>

    )}
    <span
      className={`relative z-10 py-0 font-extrabold text-xl md:text-[52px] ${pacifico.className} ${className}`}
      style={{
        background: "var(--landing-heading-bg-color)",
        color: "var(--landing-heading-text-color)",
        ...style,
      }}
    >
      {children}
    </span>
  </div>
);

export default Heading;