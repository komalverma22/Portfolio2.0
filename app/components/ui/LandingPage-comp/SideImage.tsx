import React from 'react';
import Image from 'next/image';

const SideImage = () => (
  <div className="absolute right-[-40px] bottom-[-40px] md:right-[-60px] md:bottom-[-100px] z-20 
                  hidden lg:block mt-20">
    {/* Replace src with your image path */}
    <Image
      src="/landing-pfp2.png"
      alt="Side"
      width={258}
      height={300}
      className="rounded object-cover"
    />
  </div>
);

export default SideImage;
