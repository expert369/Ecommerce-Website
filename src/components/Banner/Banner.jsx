import React from 'react'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi"
import Valentines from '../../assets/TopProducts/Valentines.jpg'

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0"
    id="banner">
        <div className='container mb-20'>
            <div
            className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-15
            ml-20 md: gap-20 sm:gap-24'
            >
                <div>
                    <img src={Valentines} alt="" 
                    className='object-cover w-[500px] h-auto shadow-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'
                    />
                </div>
                <div className="flex flex-col gap-6 sm:pt-0 ">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                        Valentines Sale up to 50% Off
                    </h1>
                    <p
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5"
                    >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                    reiciendis inventore iste ratione ex alias quis magni at optio
                    </p>
                    <div className="flex flex-col gap-4">
                    <div data-aos="fade-up" className="flex items-center gap-4">
                        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Quality Products</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                        <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                        <p>Fast Delivery</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                        <p>Easy Payment method</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                        <p>Get Offers</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner