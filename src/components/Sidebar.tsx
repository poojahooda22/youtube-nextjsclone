import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";



const Sidebar = () => {
  return (
    <div className='absolute top-0 w-[20vw] h-full bg-zinc-900 py-[1.5vw] px-[1.5vw]'>
        <div className='flex items-start'>
            <IoMenuSharp size={28} color='#999999' className='hidden sm:block' />  
            <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
        </div>
        <div className='flex items-center gap-4 mt-6 bg-zinc-700 py-1 px-2 rounded-lg'>
            <GoHomeFill size={22} />
            <p className='text-[1.7vw]'>Home</p>
        </div>
        <div className='flex items-center gap-4 mt-2 px-2'>
            <SiYoutubeshorts />
            <p className='text-[1.7vw]'>Shorts</p>
        </div>
    </div>
  )
}

export default Sidebar
