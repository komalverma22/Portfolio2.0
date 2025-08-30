import React from 'react'
import SkillHeading from './ui/SkillPage.tsx/SkillHeading'
import SkillSection from './ui/SkillPage.tsx/SkillSection'

const Skill = () => {
  return (
    <div  className='relative bg-cover bg-center h-[450px]  md:h-screen'
     style={{ backgroundImage: "url('/landing-img.png')" }}>
      <SkillHeading/>
      <SkillSection/>
    </div>
  )
}

export default Skill
