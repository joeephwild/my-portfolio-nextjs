import React from "react";
import Link  from 'next/link'
import Image from 'next/image' 

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="" />
      <div className="hidden justify-center items-center space-y-12 group-hover:block absolute md:top-[5px] md:left-[5px] top-[20%] left-[20%] translate-x-[15%]">
          <h3 className="text-3xl md:text-sm text-white tracking-wider text-center">{title}</h3>
          <Link href={projectUrl}>
              <p className="text-center py-3 mx-auto rounded-lg bg-white text-gray-700 font-bold text-lg curdor-pointer">More Info</p>
          </Link>
      </div>
  </div>;
};

export default ProjectItem;
