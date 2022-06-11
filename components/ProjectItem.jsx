import React from "react";
import Link  from 'next/link'
import Image from 'next/image' 

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image className="rounded-xl group-hover:opacity-10" src={backgroundImg} alt="" />
      <div className="hidden justify-center items-center space-y-12 group-hover:block absolute md:top-[5px] md:left-[5px] top-[20%] left-[10%] translate-x-[10%] px-6">
          <h3 className="text-xl md:text-sm text-white tracking-wider text-center">{title}</h3>
          <Link href={projectUrl}>
              <p className="bg-white rounded-xl text-gray-500 px-3 text-center py-2 cursor-pointer">More Info</p>
          </Link>
      </div>
  </div>;
};

export default ProjectItem;
