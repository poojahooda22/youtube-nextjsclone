import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className='absolute top-0 w-[20vw] h-full bg-zinc-900 py-[1.5vw] px-[1.5vw]'>
        <div className='flex items-start'>
            <IoMenuSharp size={28} color='#999999' className='hidden sm:block' />  
            <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
        </div>
        <div className='flex items-center gap-4 mt-6'>
            <GoHomeFill size={24} />
            <p>Home</p>
        </div>
    </div>
  )
}

export default Sidebar
