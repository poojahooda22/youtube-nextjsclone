'use client'

import React from 'react'
import Searchbar from './Searchbar';
import Avatar from '@mui/material/Avatar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMenuSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-[1vw] px-[1vw]'>
      <div className=' flex items-start'>
        <IoMenuSharp size={30} 
          color='#999999' 
          className='hidden sm:block'
          onClick={() => console.log('menu clicked')}
        />  
        <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
      </div>

      <div className='sm:hidden pr-[2vw]'><IoSearch size={26} color='#999999' /></div>
      <div className='w-2/3 hidden md:block'>
        <Searchbar/>
      </div>
      <div className='sm:flex items-start gap-4 hidden'>
        <RiVideoAddLine size={28} color='#999999' />
        <div className='relative'>
          <IoMdNotificationsOutline 
            size={30} 
            color='#999999' 
          />
          <div className='absolute top-0 right-[-.7vw] w-6 h-4 bg-red-600 
          rounded-full flex items-center justify-center text-[1.3vw]'>9+</div>
        </div>
        <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
      </div>
    </div>
  )
}

export default Navbar
