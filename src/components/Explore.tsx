import React from 'react';
import { LiaFireSolid } from "react-icons/lia";
import { MdOutlineShoppingBag } from "react-icons/md";



const Explore = () => {
  return (
    <div>
        <div className='mt-[2vw] flex items-center gap-2 px-2'>  
            <LiaFireSolid size={14} />
            <h4 className='text-[1vw]'>Trending</h4>
        </div>

        <div>
            <MdOutlineShoppingBag />
        </div>
    </div>
  )
}

export default Explore
