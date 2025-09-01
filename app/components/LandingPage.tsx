import React from 'react';
import LandingContainer from './ui/LandingPage-comp/LandingContainer';
import ProfileImage from './ui/LandingPage-comp/ProfileImage';
import LandingContent from './ui/LandingPage-comp/LandingContent';
import SideImage from './ui/LandingPage-comp/SideImage';

const LandingPage = () => {
  return (
    <div className='bg-cover bg-center'
     style={{ backgroundImage: "url('/landing-img.png')" }}>
        
    <LandingContainer>
      <ProfileImage />
      <LandingContent />
      <SideImage />
    </LandingContainer>
  <div
  className="w-full bg-[var(--navbar-bg-color)] h-[60px] mt-10 sm:h-[100px]"
>
  {/* content */}
</div>

    </div>
  );
};

export default LandingPage;