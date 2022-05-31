import React from "react";
import ProjectItem from './ProjectItem'
import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

const Projects = () => {
  return <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
          <h2 className="py-4 capitalize">my works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectItem title='property finder' backgroundImg={propertyImg} projectUrl='./property' />
       <ProjectItem title='property finder' backgroundImg={cryptoImg} projectUrl='./property' />
      <ProjectItem title='property finder' backgroundImg={netflixImg} projectUrl='./property' />
      <ProjectItem title='property finder' backgroundImg={twitchImg} projectUrl='./property' />
      </div>
    
    </div>
  </div>;
};

export default Projects;
