import React from 'react'
import ProjectHeading from '../components/ui/ProjectPage/ProjectHeading'
import ProjectComponentRoute from './ProjectContentRoute'

const ProjectRoute = () => {
  return (
    <div className='mt-32 md:mt-43  px-3 md:px-10 pb-5'>
    <ProjectHeading showViewMore={false}/>
    <ProjectComponentRoute/>
    </div>
  )
}

export default ProjectRoute
