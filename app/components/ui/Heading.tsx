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
  <div className="relative flex justify-center items-center" style={{ width: 439, height: 88 }}>
    {bgImageSrc && (
      <img
        src={bgImageSrc}
        alt=""
        width={386}
        height={100}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none mt-5"
        style={{ zIndex: 0 }}
      />
    )}
    <span
      className={`relative z-10 py-0 font-extrabold text-2xl md:text-[52px] ${pacifico.className} ${className}`}
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