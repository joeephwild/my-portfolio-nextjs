import React from "react";
import ProjectItem from './ProjectItem'
import hulu from '../public/assets/projects/hulu.png'
import race from '../public/assets/projects/race.png'
import airtravel from '../public/assets/projects/airtravel.png'
import portfolio from '../public/assets/projects/portfolio.png'
import squid from '../public/assets/projects/squidgame.png'
import travel from '../public/assets/projects/travel.png'
import coffee from '../public/assets/projects/coffee.png'
import nft from '../public/assets/projects/nftwebsite.png'

const Projects = () => {
  return <div className="w-full">      
      <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
          <h2 className="py-4 capitalize">my works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <ProjectItem title='Hulu clone' backgroundImg={hulu} projectUrl='./hulu' />
       <ProjectItem title='Squidgame website' backgroundImg={squid} projectUrl='./squid' />
      <ProjectItem title='airtravel webpage' backgroundImg={airtravel} projectUrl='./airtravel' />
      <ProjectItem title='travel webpage' backgroundImg={travel} projectUrl='./travel' />
      <ProjectItem title='coffee webpage' backgroundImg={coffee} projectUrl='./coffee' />
      <ProjectItem title='portfolio webpage' backgroundImg={portfolio} projectUrl='./portfolio' />
      <ProjectItem title='nft webpage' backgroundImg={nft} projectUrl='./nft' />
      </div>
    
    </div>
  </div>;
};

export default Projects;
