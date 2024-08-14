import React from 'react'
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";


const Subscribe = () => {
  return (
    <div>
      <div className='flex items-center justify-between gap-4 mt-3 px-2'>
            <div className='flex items-center gap-4'>
                <img src="/ndtv.jpg" className='w-[2.4vw] h-[2.4vw] rounded-full' />
                <p className='text-[1.3vw]'>NDTV India</p>
            </div>        
            <HiOutlineStatusOnline size={20} color='red' />
        </div>
        <div className='flex items-center  justify-between  gap-4 mt-3 px-2'>
            <div className='flex items-center gap-4'>
                <img src="/nbc.jpg" className='w-[2.4vw] h-[2.4vw] rounded-full' />
                <p className='text-[1.3vw]'>NBC News</p>
            </div>
            <HiOutlineStatusOnline size={20} color='red' />
        </div>
        <div className='flex items-center justify-between gap-4 mt-3 px-2'>
            <div className='flex items-center gap-4'>
                <img src="/express.jpg" className='w-[2.4vw] h-[2.4vw] rounded-full' />
                <p className='text-[1.3vw]'>Indian Expr..</p>
            </div>
            <HiOutlineStatusOnline size={20} color='red' />
        </div>
        <div className=''>
            <IoIosArrowDown />
        </div>
    </div>
  )
}

export default Subscribe
