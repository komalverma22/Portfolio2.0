import React from 'react';
import ProjectHeading from '../ProjectPage/ProjectHeading';
import ProjectComponent from '../ProjectPage/ProjectComponent';

const ProjectContainer: React.FC = () => {
  return (
    <div className="w-full h-auto  ">
      <div className="w-full max-w-none mx-auto px-4 md:px-6 lg:px-[35px]">
        <ProjectHeading />
        <ProjectComponent />
      </div>
    </div>
  );
};

export default ProjectContainer;