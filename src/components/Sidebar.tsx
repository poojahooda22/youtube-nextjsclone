import React from 'react';
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='absolute top-0 w-[20vw] h-full bg-zinc-900 py-[1.5vw] px-[1.5vw]'>
        <div className='flex items-start'>
            <IoMenuSharp size={28} color='#999999' className='hidden sm:block' />  
            <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
        </div>
        <div>Hello</div>
    </div>
  )
}

export default Sidebar
