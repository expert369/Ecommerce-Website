import React from 'react'
import Logo from "../../assets/logo.jpg"
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from "../Navbar/DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/#'
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services',
    },
    {
        id: 3,
        name: 'Stickers',
        link: '/#',
    },
    {
        id: 4,
        name: 'Artworks',
        link: '/#'
    },

];

const DropdownLinks = [
    {
        id: 1,
        name: 'Valentines Templates',
        link: '/#'
    },
    {
        id: 2,
        name: 'Graduation Day Templates',
        link: '/#'
    },
];

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
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

                {/* search bar*/}
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search' 
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                        transition-all duration-300 rounded-full border border-gray-300
                        px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" 
                        />
                        <IoMdSearch 
                        className='text-gray-500 group-hover:text-primary absolute 
                        top-1/2 transform -translate-y-1/2 right-3'  />
                    </div>

                    {/* order button */}
                    <button
                    onClick={ () => alert('Order button clicked')}
                    className='bg-gradient-to-r from-primary to-secondary transition-all 
                    duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3
                    group'
                    >
                        <span
                        className='group-hover:block hidden transition-all duration-200'
                        >
                        Order
                        </span>
                        <FaCartShopping 
                        className='text-xl text-white drop-shadow-sm cursor-pointer'
                        />
                    </button>

                    {/* Darkmode Switch */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
        {/* lower Navbar */}
        <div className='flex justify-center'> 
            <ul className='sm:flex items-center gap-4 py-1.5'>
                {Menu.map((data) => (
                    <li key={data.id}>
                        <a href={data.link}
                        className='inline-block px-4 hover:text-primary duration-200'
                        >
                            {data.name}</a>
                    </li>
                ))}
                {/* Simple Dropdown and Links */}
                <li className='group relative'>
                    <a href="/#"
                    className='flex items-center gap-[2px] py-2'
                    >
                        Trending Products
                        <span>
                            <FaCaretDown 
                            className='transition-all duration-200
                            group-hover:rotate-180'
                            />
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black dark:bg-gray-900'>
                        <ul>
                            {DropdownLinks.map((data) => (
                                <li key={data.id}>
                                    <a href={data.links}
                                    className='inline-block w-full rounded-md p-2
                                    hover:bg-primary/20 dark:hover:bg-white/20 dark:text-white cursor-pointer'
                                    >{data.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
  );
}

export default Navbar