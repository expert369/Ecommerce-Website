import React from 'react'
import Logo from "../../assets/logo.jpg"
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:white-text-white duration-200 relative z-40'>
        {/* upper Navbar */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="" className='font-bold text-2xl sm:text-3xl
                    flex gap-2'>
                        <img src={Logo} alt="logo" 
                        className='w-10 mix-blend-color-burn '
                        />
                        Lyka Artspace
                    </a>
                </div>
                {/* search bar and order button */}
                <div>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search' 
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                        transition-all duration-300 rounded-full border border-gray-300
                        px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                        <IoMdSearch 
                        className='text-gray-500 group-hover:text-primary absolute 
                        top-1/2 right-2 transform -translate-y-1/2 '  />
                        
                    </div>
                </div>
            </div>
        </div>
        {/* lower Navbar */}
        <div></div>
    </div>
  );
}

export default Navbar