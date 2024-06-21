import React from 'react';
import chair from '../assets/chair.jpg';
import sofa from '../assets/sofa.jpg';
import lamp from '../assets/lamp.jpg';
import bed from '../assets/bed.jpg';
import Items from './Items';


function Product() {
    const products = [
        {
            name:"sakarias armchair",
            title:"chair",
            image:chair
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:sofa
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:bed
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:lamp
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:chair
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:sofa
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:bed
        },
        {
            name:"sakarias armchair",
            title:"chair",
            image:lamp
        }
        
    ]
  return (
    <div className='bg-slate-200'>
    <h1 className='text-5xl text-center p-7'>Best selling products</h1>
    <ul className="w-[300px] h-[55px] rounded-full m-auto flex items-center justify-center space-x-7 bg-zinc-50">
        <li className='bg-zinc-300 rounded-full p-3 cursor-pointer'>Chair</li>
        <li className='cursor-pointer'>Beds</li>
        <li className='cursor-pointer'>Sofa</li>
        <li className='cursor-pointer'>Lamp</li>
    </ul>
    <div className='w-[90vw] h-auto m-auto mt-8'>
        <Items products={products}/>
    </div>
</div>
  )
}

export default Product