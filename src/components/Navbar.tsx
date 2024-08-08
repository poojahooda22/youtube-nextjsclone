import React from 'react'
import Searchbar from './Searchbar';
import Avatar from '@mui/material/Avatar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex items-start justify-between py-[1vw] px-[1vw]'>
      <div className=' flex items-start'>
        <IoMenuSharp size={30} color='#999999' />  
        <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
      </div>

      <div className='w-2/3 hidden md:block'><Searchbar/></div>
      <div className='flex items-start gap-4'>
        <RiVideoAddLine size={28} color='#999999' />
        <div className='relative'>
          <IoMdNotificationsOutline size={30} color='#999999' />
          <div className='absolute top-0 right-[-.7vw] w-6 h-4 bg-red-600 
          rounded-full flex items-center justify-center text-[1.3vw]'>9+</div>
        </div>
        
        <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
      </div>
    </div>
  )
}

export default Navbar
