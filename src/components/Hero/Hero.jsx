import React from 'react'
import Image1 from "../../assets/hero/Image1.jpg"
import Image2 from "../../assets/hero/Image2.jpg"
import Image3 from "../../assets/hero/Image3.jpg"
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "Image 1",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        image: Image2,
        title: "Image 2",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        image: Image3,
        title: "Image 3",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute
        -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* text content section */}
                    <div
                    className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 
                    text-center sm:text-left order-2 sm:order-1 relative z-10'
                    >
                        <h1 className='text-5xl sm:text-6xl lg:text-77xl font-bold'>Lorem ipsum dolor sit amet.</h1>
                        <p className='text-sm'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Dolores, nesciunt?
                        </p>
                        <div>
                            <button
                            className='bg-gradient-to-r from-primary to-secondary
                            hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/* image content section */}
                    <div className='order-1 sm:order-2'>
                        <div>
                            <img src={Image1} alt="" 
                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                            sm:scale-125 object-contain mx-auto backdrop-blur-md'
                            />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Hero