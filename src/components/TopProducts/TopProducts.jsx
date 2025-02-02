import React from 'react'
import Img1 from '../../assets/TopProducts/Img1.jpg'
import Img2 from '../../assets/TopProducts/Img2.jpg'
import Img3 from '../../assets/TopProducts/Img3.jpg'
import { FaStar } from 'react-icons/fa'


const ProductsData = [
    {
        id: 1,
        image: Img1,
        title: 'Product 1',
        rating: 5,
        description: 'Product 1 Description',
        aosDelay: "0",
    },
    {
        id: 2,
        image: Img2,
        title: 'Product 2',
        rating: 4,
        description: 'Product 2 Description',
        aosDelay: "200",
    },
    {
        id: 3,
        image: Img3,
        title: 'Product 3',
        rating: 4,
        description: 'Product 3 Description',
        aosDelay: "400",
    },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container mb-24'>
            {/* Header Section */}
            <div className='mb-32 text-left'>
                <h3 
                data-aos='fade-up' 
                className='text-primary text-sm'
                >
                    Top Rated Products For You
                </h3>
                <h1 
                data-aos='fade-up' 
                className='font-bold 
                text-3xl'
                >
                    Best Products
                </h1>
                <p 
                data-aos='fade-up' 
                className='text-xs text-gray-400'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Voluptatibus, tempora.
                </p>
            </div>
            {/* Body Section */}
            <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 
            place-items-center">
                {ProductsData.map((data) => (
                <div
                data-aos='zoom-in'
                className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
                dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 
                group max-w-[300px]'
                >
                {/* Image Section */}
                    <div 
                    className='h-[200px] w-[300px]'
                    >
                        <img src={data.image} alt="" 
                        className='max-w-[240px] block mx-auto object-fit aspect-[3/3] transform -translate-y-20 
                        group-hover:scale-105 duration-300 drop-shadow-md rounded-xl'
                        />
                    </div>
                {/* Details Section */}
                    <div className='flex items-center justify-center'>
                        {[...Array(data.rating)].map((_, rate) => (
                            <FaStar key={rate} className='text-yellow-400'/>

                        ))}
                    </div>
                    <div className='text-center p-2'>
                        <h3 className='font-semibold text-lg'>
                            {data.title}
                        </h3>
                        <p className='text-sm text-gray-600 group-hover:text-white
                        line-clamp-2'>
                            {data.description}
                        </p>
                        <button>
                            hello
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopProducts