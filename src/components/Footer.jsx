import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#21201e] text-white'>
    <div className='flex flex-wrap items-center justify-evenly p-10'>
        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <h1 className='text-3xl p-2'>Panto</h1>
            <p className='w-full md:w-[400px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Necessitatibus sunt omnis, minus minima ea accusamus placeat consequuntur 
            </p>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 links'>
            <ul className='links'>
                <li>Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
            </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 links'>
            <ul className='links'>
                <li>Furniture</li>
                <li>Beds</li>
                <li>Chair</li>
                <li>Sofa</li>
            </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 links'>
            <ul className='links'>
                <li>Follow us</li>
                <li className='flex gap-2 items-center'>
                    <span><FaFacebookF/></span>
                    <span>Facebook</span>
                </li>
                <li className='flex gap-2 items-center'>
                    <span><FaTwitter/></span>
                    <span>Twitter</span>
                </li>
                <li className='flex gap-2 items-center'>
                    <span><FaInstagram/></span>
                    <span>Instagram</span>
                </li>
            </ul>
        </div>
    </div>

    <address className='flex justify-between border-t border-white p-2'>
        <p>&copy; 2024 Your Company Name</p>
        <ul>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
        </ul>
    </address>
</div>

  )
}

export default Footer