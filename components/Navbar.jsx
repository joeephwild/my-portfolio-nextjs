import { useState } from "react";
import Link from 'next/link';
import { AiOutlineClose,AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithubAlt, } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    const styles = {
        wrapper: 'bg-white w-full top-0 fixed h-20 z-[100] ',
        container: 'flex justify-between items-center w-full h-full 2xl:px-16 px-2',
        link: 'flex items-center hidden lg:inline-flex  transition all ease-in-out delay-150  text-blue-600 space-x-2 font-bold ',
        nav: 'md:hidden'
    }
  return <div className={styles.wrapper}>
        <div className={styles.container}>
             <h2 className="text-center px-1 my-2 md:my-4 rounded-t-xl text-2xl lg:text-5xl text-white bg-blue-600 py-4">jo</h2>
             <div>
                 <ul className={styles.link}>
                    
                 <Link href="/">
                         <li className=" hover:animate-bounce">Home</li>
                         </Link>

                         <Link href='/'>
                         <li className=" hover:animate-bounce">About</li>
                         </Link>

                         <Link href="/">
                         <li className=" hover:animate-bounce">Skills</li>
                         </Link>

                         <Link href="/">
                         <li className=" hover:animate-bounce">Projects</li>
                         </Link>

                         <Link href="/">
                         <li className=" hover:animate-bounce">Contact</li>
                         </Link>
                 </ul>
                 <div onClick={handleNav} className={styles.nav}>
                     <AiOutlineMenu size={25} />
                 </div>
             </div>
        </div>
        <div className={nav ? 'fixed md:hidden left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-100'
             : 'fixed left-[-100%] top-0 p-10 ease-in duration-100'}>
               <div className="flex items-center justify-center justify-around">
                   <h2  className="text-center px-1 my-2 md:my-4 rounded-t-xl text-2xl lg:text-5xl text-white bg-blue-600 py-4">jo</h2>
                     <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                     <AiOutlineClose />
                     </div>
                      
               </div>
               <div className="border-b capitalize border-gray-300 my-4">
                   <p className="w-[85%] md:w-[90%] py-4">Let build something legendary together</p>
                  
               </div>
               <div>
                   <ul className="flex-col space-y-4 m-10 font-bold">
                    
                    <Link href="/">
                            <li className=" hover:animate-bounce">Home</li>
                            </Link>
   
                            <Link href='/'>
                            <li className=" hover:animate-bounce">About</li>
                            </Link>
   
                            <Link href="/">
                            <li className=" hover:animate-bounce">Skills</li>
                            </Link>
   
                            <Link href="/">
                            <li className=" hover:animate-bounce">Projects</li>
                            </Link>
   
                            <Link href="/">
                            <li className=" hover:animate-bounce">Contact</li>
                            </Link>
                    </ul>
                    <div className="pt-4">
                      <p className="uppercase tracking-widest text-[#5651e5]">Lets Connect</p>
                      <div className="flex pt-4 space-x-4">
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
                   </div>
            </div>
        </div>
  </div>;
};

export default Navbar;
