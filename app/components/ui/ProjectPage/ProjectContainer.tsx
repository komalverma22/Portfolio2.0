import React from 'react';
import ProjectHeading from '../ProjectPage/ProjectHeading';
import ProjectComponent from '../ProjectPage/ProjectComponent';

const ProjectContainer: React.FC = () => {
  return (
    <div className="w-full h-[1024px] ">
      <div className="w-full max-w-none mx-auto px-4 md:px-6 lg:px-[35px] py-8 lg:py-0">
        <ProjectHeading />
        <ProjectComponent />
      </div>
    </div>
  );
};

export default ProjectContainer;