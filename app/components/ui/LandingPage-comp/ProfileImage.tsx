"use client"
import React from 'react';
import Image from 'next/image';

const ProfileImage = () => (
  <div className="relative w-[300px] sm:w-[472.18px] h-[350px]  sm:h-[505px] mr-0 md:mr-8 mb-8 md:mb-0 flex items-center justify-center">
    {/* Brown rectangle */}
    <div
      className="absolute   w-[0px]  sm:w-[759.55px]  h-[0px] sm:h-[739px] ml-253 z-0"
      style={{
        // boxShadow: '0px 4px 24px 0px rgba(0,0,0,0.10)',
         backgroundColor: "var(--landing-bg-color)" 
      }}
    />
    {/* Profile image */}
    <div
      className="rounded bg-white w-[300px]  sm:w-[472.18px]  h-[350px] sm:h-[505px] flex items-center justify-center z-10 shadow-lg"
      style={{ boxShadow: "2px 4px 9px rgba(0,0,0,0.2)" }}
    >
      {/* <Image
        src="/landing-pfp.png"
        alt="Profile"
        width={431}
        height={463}
        className="rounded "
        priority
      /> */}
      <div className="relative w-[280px] h-[330px] sm:w-[300px] sm:h-[330px] md:w-[431px] md:h-[463px]">
  <Image
    src="/landing-pfp.png"
    alt="Profile"
    fill
    className="rounded object-cover"
    priority
  />
</div>

    </div>
  </div>
);

export default ProfileImage;