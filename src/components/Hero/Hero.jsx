import React from 'react'
import Image1 from "../../assets/hero/Image1.jpg"
import Image2 from "../../assets/hero/Image2.jpg"
import Image3 from "../../assets/hero/Image3.jpg"
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        image: Image1,
        title: "Lovely Greeting Cards",
        description: "Great quality folded greeting cards many designs to choose."
    },
    {
        id: 2,
        image: Image2,
        title: "Themed Bookmarks",
        description: "Waterproof, durable, back-to-back design"
    },
    {
        id: 3,
        image: Image3,
        title: "Customized Ref Magnet Souvenir",
        description: "Free layout for a minimum of 20 pcs., waterproof and durable"
    },
]

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        puaseOnFocus: true,
    }

  return (
    <div className='relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center
    dark:bg-gray-950 dark:text-white duration-200'
    id="hero">
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute
        -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((data) => (
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 p-5 md:gap-10 sm:gap-16'>
                            {/* text content section */}
                            <div
                            className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 
                            text-center sm:text-left order-2 sm:order-1 relative z-10'
                            >
                                <h1 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl sm:text-6xl lg:text-77xl font-bold'
                                >{data.title}
                                </h1>
                                <p 
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    className='text-sm'
                                >
                                    {data.description}
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
                                <div 
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className='relative z-10'
                                >
                                    <img src={data.image} alt="" 
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                                    sm:scale-105 lg:scale-120 object-contain mx-auto'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero