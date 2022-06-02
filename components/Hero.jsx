import React from "react";
import Image from 'next/image'
import Wave from '../public/assets/wave-haikei.png'
import hero from '../public/assets/hero2.png'
import { AiOutlineClose,AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithubAlt, } from 'react-icons/fa'


const Hero = () => {
  return <div className="w-full h-full text-center">
      <Image src={Wave} layout="fill" objectFit="cover" alt="" />
      <div className="">
      <Image src={hero} layout="fill" objectFit="cover"  alt="" />
      </div>
     <div className="max-w-[1240px] flex-col mt-48 ml-[50%]  justify-center items-center">
        <p className="uppercase text-sm tracking-widest text-gray-900">Let Build Something together</p>
        <h1 className="">Hi, Im <span className="text-[#5651e5]">JOSEPH</span></h1>
        <h1 className='py-2 text-gray-700'>A Frontend Web Developer</h1>
        <p>Im a frontend web developer specializing in building ( and ocacasionally designing)
            exceptional digital experiences. Currently, Im focused on designing and building respnsive
            front-end web application while learning blockchain backend development.
        </p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <div className="rounded-full p-3 shadow-xl cursor-pointer shadow-gray-400">
                          <FaLinkedinIn />
                          </div>
                          <div className="rounded-full shadow-xl p-3 cursor-pointer shadow-gray-400">
                              <FaGithubAlt />
                          </div>
                          <div className="rounded-full shadow-lg p-3 cursor-pointer shadow-gray-400">
                              <AiOutlineMail/>
                          </div>
        </div>
     </div>
  </div>;
};

export default Hero;
