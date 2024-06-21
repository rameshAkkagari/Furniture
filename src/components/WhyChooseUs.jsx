import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-evenly mt-12 p-8 w-[97vw] m-auto md:flex-row">
    <h1 className='text-4xl mb-8'>Why choosing us</h1>
    
    <div className="flex flex-col gap-4 w-[400px]">
      <h3 className="text-lg">Luxury facilities</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem tempora fuga sit ipsam dolore eaque dolorem? Sunt ipsum a itaque culpa est provident deleniti</p>
      <span className="text-orange-500 cursor-pointer flex items-center">
        more info
        <IoIosArrowRoundForward size={30}/>
      </span> 
    </div>
    
    <div className="flex flex-col gap-4 w-[400px] mt-4">
      <h3 className="text-lg">Luxury facilities</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem tempora fuga sit ipsam dolore eaque dolorem? Sunt ipsum a itaque culpa est provident deleniti</p>
      <span className="text-orange-500 cursor-pointer flex items-center">
        more info
        <IoIosArrowRoundForward size={30}/>
      </span> 
    </div>
    
    <div className="flex flex-col gap-4 w-[400px] mt-4">
      <h3 className="text-lg">Luxury facilities</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quidem tempora fuga sit ipsam dolore eaque dolorem? Sunt ipsum a itaque culpa est provident deleniti</p>
      <span className="text-orange-500 cursor-pointer flex items-center">
        more info
        <IoIosArrowRoundForward size={30}/>
      </span> 
    </div>
  </div>
  
  );
};

export default WhyChooseUs;
