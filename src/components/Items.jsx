import React from 'react'
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaRegStar } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";
function Items({products}) {
    
  return (
    <div>
        <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={4} // Default number of slides per view
       navigation
       loop={true}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       breakpoints={{
           // Responsive breakpoints
           0: {
               slidesPerView: 1,
           },
           765: {
               slidesPerView: 2,
           },
           1024: {
               slidesPerView: 4,
           },
       }}
    >
        {products.map((item, index) => (
            <SwiperSlide key={index} className='swipe'>
                <li className='bg-white'>
                    <img className='w-full sm:w-[60vw]' src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                    <h4>{item.name}</h4>
                    <div className='flex'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <div className='flex justify-between '>
                        <h3>&392</h3>
                        
                        <BiSolidPlusCircle size={25} />
                    </div>
                </li>
            </SwiperSlide>
        ))}
       
    </Swiper>

    </div>

   
  )
}

export default Items