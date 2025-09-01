import React from 'react';

const LandingContainer = ({ children }: { children: React.ReactNode }) => (
  <section
    className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full   max-w-[1138px] mx-auto px-4  py-0 md:py-20 "
    // Replace with your image path
  >
    {children}
  </section>
);

export default LandingContainer;


