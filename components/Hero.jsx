import React from "react";
import Image from 'next/image'
import work from '../public/hand.svg'
import { motion } from "framer-motion";
import hero from '../public/assets/hero2.png'
import { AiOutlineClose,AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithubAlt, } from 'react-icons/fa'


const Hero = () => {
  return <div className="w-full mt-12 md:mt-5 grid grid-cols-1 md:grid-cols-2 h-full text-center"> 
  
  <div
  className="hidden md:inline-flex">
  <Image src={work} width={650} height={650} objectFit="contain" alt=""/>
  </div>
  <div className=" md:hidden lg:hidden">
       <Image src={work} width={650} height={650} objectFit="contain" alt=""/>
      </div>
     <div className="md:max-w-[240px] px-2 flex-col text-center md:mt-48 lg:ml-[50%] xl:ml-[60%] justify-center items-center">
        <p className="uppercase text-3xl lg:text-sm tracking-widest text-gray-900">Let Build Something together</p>
        <h1 className="text-2xl lg:text-xl">Hi, Im <span className="text-[#5651e5]">JOSEPH</span></h1>
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
