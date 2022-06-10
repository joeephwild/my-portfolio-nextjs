import React from "react";
import Image from 'next/image'
import about from '../public/assets/about.JPG'

const About = () => {
  return <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-6">
          <div className="w-full h-auto flex items-center justify-center p-4 hover:scale-105 eas3e-in duration-300">
          <Image src={about} width={220} height={220} alt="" className="drop-shadow-lg shadow-gray-600 rounded-full"/>
          </div>
      
        <div className="col-span-2">
           <p className="upercase text-xl tracking-widest text-[#5651e5]">About Me</p>
           <h2 className="py-4">Who Am I</h2>
           <p className="py-2 text-gray-600 capitalize">Adventure is all i find</p>
           <p>HELLO WORLD, my first programming application,got me so hyped and happy, i was just drawn to th feeling.
               I started learning javascript and was even more enthused with making interactive and responsive applications. I then started creating some 
               amazing design and it been a lot of fun. Im now spending my time to improve my skills in React JS, Firebase, and
               learning new technologies.
                   
           </p>
           <p className="py-2 text-[#5651e5]  underline cursor-pointer">check out some of my projects</p>
        </div>
      </div>
  </div>;
};

export default About;
