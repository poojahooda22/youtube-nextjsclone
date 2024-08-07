import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='absolute top-0 w-[20vw] h-full bg-zinc-900 py-[1.5vw] px-[1.5vw]'>
        <div className='flex items-start'>
            <IoMenuSharp size={28} color='#999999' className='hidden sm:block' />  
            <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
        </div>
        <div className='flex items-center gap-4 mt-6 bg-zinc-800 py-[1.1vw] px-2 rounded-lg'>
            <GoHomeFill size={20} />
            <p className='text-[1.3vw]'>Home</p>
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <SiYoutubeshorts size={20} />
            <p className='text-[1.3vw]'>Shorts</p>
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <MdOutlineSubscriptions size={20} />
            <p className='text-[1.3vw]'>Subscriptions</p>
        </div>
        <div className='w-full h-[1px] bg-zinc-700 mt-4'></div>
    </div>
  )
}

export default Sidebar
