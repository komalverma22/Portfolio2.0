import React from 'react';
import Image from 'next/image';

const ProfileImage = () => (
  <div className="relative w-[472.18px] h-[505px] mr-0 md:mr-8 mb-8 md:mb-0 flex items-center justify-center">
    {/* Brown rectangle */}
    <div
      className="absolute   w-[759.55px] h-[739px] ml-253 z-0"
      style={{
        // boxShadow: '0px 4px 24px 0px rgba(0,0,0,0.10)',
         backgroundColor: "var(--landing-bg-color)" 
      }}
    />
    {/* Profile image */}
    <div
      className="rounded bg-white w-[472.18px] h-[505px] flex items-center justify-center z-10 shadow-lg"
      style={{ boxShadow: "2px 4px 9px rgba(0,0,0,0.2)" }}
    >
      <Image
        src="/landing-pfp.png"
        alt="Profile"
        width={431}
        height={463}
        className="rounded"
        priority
      />
    </div>
  </div>
);

export default ProfileImage;