import React from 'react'
import Searchbar from './Searchbar';
import Avatar from '@mui/material/Avatar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-[1vw] px-[1vw]'>
      <div className='w-[16vw] '>  
        <img src="/ytlogo.svg" alt="logo" className='w-32 h-10' />  
      </div>

      <div className='w-2/3 hidden sm:block'><Searchbar/></div>
      <div className='flex items-start gap-2'>
        <RiVideoAddLine size={28} color='#777777' />
        <IoMdNotificationsOutline size={30} color='#777777' />
        <Avatar sx={{ width: 36, height: 36 }}>P</Avatar>
      </div>
    </div>
  )
}

export default Navbar
