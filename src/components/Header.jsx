import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
function Header() {
    const [links,setlinks] = useState(false)
    const handlerlinks  = () =>{
        setlinks(!links)
    }
  return (
    <div className="relative">
      <img 
        src="https://thumbs.dreamstime.com/b/urban-jungle-trendy-living-room-interior-white-couch-black-knot-pillow-wooden-furniture-copy-space-empty-wall-174228512.jpg" 
        alt="image" 
        className="w-full h-[90vh]"
      />
      <header className={`${links ? "absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-75 bg-white" : "absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-75"}`}>
        <h1 className="text-3xl font-bold">Panto</h1>
        <ul className={`${links ? "flex flex-col bg-white top-20 absolute w-full left-0 p-4" : "hidden md:flex space-x-4"}`}>
          <li><a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">Furniture</a></li>
          <li><a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">Shop</a></li>
          <li><a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">About us</a></li>
          <li><a href="#" className="text-lg font-medium text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>
        <div className="flex space-x-4">
          <IoCartOutline size={30} className="text-gray-700 hover:text-gray-900" />
          {!links && <FaBars size={25} className="text-gray-700 hover:text-gray-900 md:hidden" onClick={handlerlinks}/>}
          {links && <IoClose size={25} onClick={handlerlinks}/>}
        </div>
      </header>
      <div className="absolute inset-0 top-[15rem] items-center justify-center ">
      <h1 className="text-center text-white text-2xl md:text-5xl font-bold">
          Make your interior more <br /> minimalistic & modern
        </h1>
        <p className='text-center p-2'>Turn your room with panto into a lot more minimalistic <br/> and moders with ease and speed</p>
        <div className='flex items-center justify-center rounded-full bg-white w-[300px] m-auto'>
            <input className='w-[250px] p-3 rounded-full outline-none focus:ring-0' type='text' placeholder='seacrh furniture'/>
            <IoIosSearch className='bg-orange-500 p-3 rounded-full'  size={43} color='white'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
