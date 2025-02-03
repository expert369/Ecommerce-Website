import React from 'react'
import Img1 from "../../assets/TopProducts/Img1.jpg"
const Testimonials = () => {
  return (
    <div>
        <div className='container'>
            <div className='text-center'>
                <p className='text-primary text-sm'>What our customers are saying</p>
                <h1 className='text-black font-bold text-4xl'>Testimonials</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eligendi.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 relative top-5'>
                <div className='w-[290px] h-[250px] rounded-lg bg-yellow-100 absolute'>
                    <img src={Img1} alt="" 
                    className='rounded-full h-[80px] w-[80px] '
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials