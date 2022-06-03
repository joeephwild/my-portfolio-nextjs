import React from "react";
import ProjectItem from './ProjectItem'
import hulu from '../public/assets/projects/hulu.png'
import race from '../public/assets/projects/race.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import portfolio from '../public/assets/projects/portfolio.png'
import squid from '../public/assets/projects/squidgame.png'
import travel from '../public/assets/projects/travel.png'
import coffee from '../public/assets/projects/coffee.png'

const Projects = () => {
  return <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
          <h2 className="py-4 capitalize">my works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <ProjectItem title='Hulu clone' backgroundImg={hulu} projectUrl='./property' />
       <ProjectItem title='Squidgame website' backgroundImg={squid} projectUrl='./property' />
      <ProjectItem title='Netflix webpage' backgroundImg={netflixImg} projectUrl='./property' />
      <ProjectItem title='Driver race' backgroundImg={race} projectUrl='./property' />
      <ProjectItem title='travel webpage' backgroundImg={travel} projectUrl='./property' />
      <ProjectItem title='coffee webpage' backgroundImg={coffee} projectUrl='./property' />
      <ProjectItem title='portfolio webpage' backgroundImg={portfolio} projectUrl='./property' />
      </div>
    
    </div>
  </div>;
};

export default Projects;
