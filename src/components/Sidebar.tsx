import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";
import { RiFolderVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className='absolute top-0 w-[22vw] h-full bg-zinc-900 py-[1.5vw] px-[1.5vw]'>
        <div className='flex items-start'>
            <IoMenuSharp size={28} color='#999999' className='hidden sm:block' />  
            <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
        </div>
        <div className='flex items-center gap-4 mt-6 
        bg-zinc-800 py-[1.1vw] px-2 rounded-lg'>
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
        <div className='w-full h-[1px] bg-zinc-700 mt-4 px-2'></div>

        <div className='mt-[2vw] flex items-center gap-2 px-2'>
            <h4 className='text-[1.6vw]'>You</h4>
            <IoIosArrowForward size={14} />
        </div>
        <div className='flex items-center  gap-4 mt-3 px-2'>
            <MdHistory size={20} />
            <p className='text-[1.3vw]'>History</p>
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <MdPlaylistPlay size={20} />
            <p className='text-[1.3vw]'>Playlists</p>
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <RiFolderVideoLine  size={20} />
            <p className='text-[1.3vw]'>Videos</p>
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <MdOutlineWatchLater  size={20} />
            <p className='text-[1.3vw]'>Watch later</p>
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <BiLike  size={20} />
            <p className='text-[1.3vw]'>Liked videos</p>
        </div>

        <div className='w-full h-[1px] bg-zinc-700 mt-4 px-2'></div>
        <h4 className='text-[1.5vw] mt-3 px-2'>Subscriptions</h4>

        <div className='flex items-center justify-between gap-4 mt-3 px-2'>
            <div className='flex items-center gap-4'>
                <img src="/ndtv.jpg" className='w-[2.4vw] h-[2.4vw] rounded-full' />
                <p className='text-[1.3vw]'>NDTV India</p>
            </div>        
            <HiOutlineStatusOnline size={20} color='red' />
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <div>
                
            </div>
            <img src="/nbc.jpg" className='w-[2.4vw] h-[2.4vw] rounded-full' />
            <p className='text-[1.3vw]'>NBC News</p>
            <HiOutlineStatusOnline size={20} color='red' />
        </div>
        <div className='flex items-center gap-4 mt-3 px-2'>
            <img src="/express.jpg" className='w-[2.4vw] h-[2.4vw] rounded-full' />
            <p className='text-[1.3vw]'>Indian Expr..</p>
            <HiOutlineStatusOnline size={20} color='red' />
        </div>

    </div>
  )
}

export default Sidebar
