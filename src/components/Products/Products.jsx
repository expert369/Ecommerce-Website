import React from 'react'
import { FaStar } from 'react-icons/fa'
import Img1 from '../../assets/Products/Img1.jpg'
import Img2 from '../../assets/Products/Img2.jpg'
import Img3 from '../../assets/Products/Img3.jpg'
import Img4 from '../../assets/Products/Img4.jpg'
import Img5 from '../../assets/Products/Img5.jpg'

const ProductsData = [
    {
        id: 1,
        image: Img1,
        title: 'Inspired Polaroid/Instax Photos',
        rating: 5,
        description: 'Great quality printed photos in thick woven photopaper',
        aosDelay: "0",
    },
    {
        id: 2,
        image: Img2,
        title: 'Subject and Name Label Stickers',
        rating: 5,
        description: 'Customized label stickers (matte & glossy)',
        aosDelay: "200",
    },
    {
        id: 3,
        image: Img3,
        title: 'Customized Money Envelope',
        rating: 5,
        description: 'with blank name label, resealable, no need glue or tape - glossy photopaper',
        aosDelay: "400",
    },
    {
        id: 4,
        image: Img4,
        title: 'Layout Design Services',
        rating: 5,
        description: 'Request any theme/design',
        aosDelay: "600",
    },
    {
        id: 5,
        image: Img5,
        title: 'Customized Invitation',
        rating: 5,
        description: 'folded invitation card with envelope and seal sticker or tag and ribbon',
        aosDelay: "800",
    },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12' id="products">
        <div className='container'>
            {/* Header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Creative Products & Services</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Ready made designs, customized products and layout design services
                </p>
            </div>
            {/* Body section */}
            <div>
                <div
                className='grid grid-cols-1 sm:grid-cols-3 
                md:grid-cols-5 lg-grid-cols-5 place-items-center gap-5'
                >
                {/* Card section */}
                {ProductsData.map((data) => (
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay} 
                    key={data.id} 
                    className='space-y-3 mt-5'
                    >
                        <img src={data.image} alt="" 
                        className='h-[220px] w-[250px] object-cover rounded-md transition-all duration-300 
                        hover:scale-125 hover:border-2 hover:border-black hover:shadow-2xl hover:-translate-y-6
                        hover:'
                        />
                        <div>
                            <h3 className='font-semibold'>{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.description}</p>
                            <div className='flex items-center gap-1'>
                                {[...Array(data.rating)].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-400" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products