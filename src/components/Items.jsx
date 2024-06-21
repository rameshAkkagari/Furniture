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
    <div className="swiper-container">
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    loop={true}
    breakpoints={{
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
    className="mySwiper"
  >
    {products.map((item, index) => (
      <SwiperSlide key={index} className="swipe">
        <div className="bg-white rounded-lg p-4">
          <img className="w-full sm:w-full md:w-[60vw] mx-auto" src={item.image} alt={item.title} />
          <div className="mt-4 text-center">
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.name}</p>
            <div className="flex justify-center mt-2">
              <FaRegStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
            </div>
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-xl font-bold">$356</h3>
              <BiSolidPlusCircle size={25} className="text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

   
  )
}

export default Items