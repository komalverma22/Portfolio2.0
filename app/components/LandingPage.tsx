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
  style={{
    background: "var(--navbar-bg-color)", // ya aapka pink color code
    height: "100px",
    width: "100%",
  }}
/>
    </div>
  );
};

export default LandingPage;