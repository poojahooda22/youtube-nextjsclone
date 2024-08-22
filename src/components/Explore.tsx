import React from 'react';
import { LiaFireSolid } from "react-icons/lia";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { GoTrophy } from "react-icons/go";
import { MdOutlinePodcasts } from "react-icons/md";


const Explore = () => {
  return (
    <div>
        <div className='mt-[2vw] flex items-center gap-4 px-2'>  
            <LiaFireSolid 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Trending
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <MdOutlineShoppingBag 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Shopping
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <IoMusicalNoteOutline 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Music
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <PiFilmSlate 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Films
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <HiOutlineStatusOnline 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Live
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <SiYoutubegaming 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Gaming
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <BiNews 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                News
            </h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <GoTrophy 
                size={20} 
            />
            <h4 className='text-[1.3vw]'>
                Sports
            </h4>
        </div>

        <div 
            className='mt-[2vw] flex 
            items-center 
            gap-4 px-2'
        >
            <MdOutlinePodcasts 
            size={20} />
            <h4 className='text-[1.3vw]'>Podcasts</h4>
        </div>
    </div>
  )
}

export default Explore
