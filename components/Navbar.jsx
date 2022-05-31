import React from "react";
import Link from 'next/link';

const Navbar = () => {
    const style = {
        wrapper: 'bg-white w-full fixed h-20  shadow-xl z-[100] shadow-slate-300',
        container: 'flex justify-between items-center w-full h-full 2xl:px-16 px-2',
        link: 'flex items-center space-x-2 font-bold ',
        linkItems: 'space-x-2'
    }
  return <div className={style.wrapper}>
        <div className={style.container}>
             <h2 className="text-center text-3xl lg:text-5xl text-blue-600">jo</h2>
             <div>
                 <ul className={style.link}>
                    
                 <Link href="/">
                         <li className="linkItems">Home</li>
                         </Link>

                         <Link href='/'>
                         <li className="linkItems">About</li>
                         </Link>

                         <Link href="/">
                         <li className="linkItems">Skills</li>
                         </Link>

                         <Link href="/">
                         <li className="linkItems">Projects</li>
                         </Link>

                         <Link href="/">
                         <li className="linkItems">Contact</li>
                         </Link>
                 </ul>
             </div>
        </div>
  </div>;
};

export default Navbar;
