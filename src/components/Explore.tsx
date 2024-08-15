import React from 'react';
import { LiaFireSolid } from "react-icons/lia";
import { MdOutlineShoppingBag } from "react-icons/md";



const Explore = () => {
  return (
    <div>
        <div className='mt-[2vw] flex items-center gap-2 px-2'>  
            <LiaFireSolid size={20} />
            <h4 className='text-[1.3vw]'>Trending</h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-2 px-2'>
            <MdOutlineShoppingBag size={20} />
            <h4 className='text-[1.3vw]'>Shopping</h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-2 px-2'>
            <MdOutlineShoppingBag size={20} />
            <h4 className='text-[1.3vw]'>Music</h4>
        </div>
    </div>
  )
}

export default Explore
