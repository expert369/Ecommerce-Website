import React from 'react'
import Slider from 'react-slick'
import Img1 from "../../assets/TopProducts/Img1.jpg"
import Img2 from "../../assets/TopProducts/Img2.jpg"
import Img3 from "../../assets/TopProducts/Img3.jpg"
import { div, img } from 'framer-motion/client'
import { TbRulerMeasure } from 'react-icons/tb'

const TestimonialData = [
    {
        id: 1,
        name: "Testimonial1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit.",
        img: Img1,
    },
    {
        id: 2,
        name: "Testimonial2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit.",
        img: Img2,
    },
    {
        id: 3,
        name: "Testimonial3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit.",
        img: Img3,
    },
]

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeedD: 2000,
        cssEase: "linear",
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }

  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-full'>
                <p data-aos="fade-up" className='text-primary text-sm'>What our customers are saying</p>
                <h1 data-aos="fade-up" className='text-black font-bold text-3xl'>Testimonials</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eligendi.</p>
            </div>
            {/* Testimonial cards */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {TestimonialData.map((data) => (
                        <div className='my-6 group'>
                            <div key={data.id}
                            className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                            dark:bg-gray-800 bg-primary/10 relative group-hover:ease-out duration-300
                            group-hover:scale-105 group-hover:border-2 group-hover:border-black group-hover:border-solid
                            group-hover:-translate-y-4'
                            >
                                <div className='mb-4'>
                                    <img src={data.img} alt="" 
                                    className='rounded-full w-20 h-20'
                                    />
                                </div>
                                <div className='flex item-center flex-col gap-4'>
                                    <div className='space-y-3'>
                                        <p
                                        className='text-xs text-gray-500'
                                        >{data.text}
                                        </p>
                                        <h1
                                        className='text-xl font-bold text-black/80 dark:text-light'
                                        >{data.name}
                                        </h1>
                                    </div>
                                </div>
                                <p className='text-black/20 text-9xl font-serif absolute
                                top-0 right-0'>
                                    ,,
                                    </p>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials