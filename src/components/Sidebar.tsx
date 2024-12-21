'use client'

import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import Channel from './Channel';
import Subscribe from './Subscribe';
import { AnimatePresence, motion } from 'framer-motion';
import { useSidebarContext } from './SidebarContext';


const Sidebar = () => {
    const { isVisible } = useSidebarContext();

  return (
    <AnimatePresence>
    {isVisible && (
        <div 
            className='absolute top-0 w-[22vw] 
            h-full bg-zinc-900 py-[1.5vw] px-[1.5vw]'    
        >
            <div className='flex items-start'>
                <IoMenuSharp 
                    size={28} 
                    color='#999999' 
                    className='hidden sm:block' 
                />  
                <img 
                    src="/ytlogo.svg" 
                    alt="logo" 
                    className='w-28 h-8' 
                />  
            </div>
            <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div 
                    className='flex items-center gap-4 mt-6 
                    bg-zinc-800 py-[1.1vw] px-2 rounded-lg'
                >
                    <GoHomeFill 
                        size={20}
                    />
                    <p className='text-[1.3vw]'>
                    Home
                    </p>
                </div>
                <div
                    className='flex items-center 
                    gap-4 mt-3 px-2'>
                    <SiYoutubeshorts size={20} />
                    <p className='text-[1.3vw]'>Shorts</p>
                </div>
                <div className='flex items-center gap-4 mt-3 px-2'>
                    <MdOutlineSubscriptions size={20} />
                    <p className='text-[1.3vw]'>Subscriptions</p>
                </div>
                <div className='w-full h-[1px] bg-zinc-700 mt-4 px-2'></div>
                <Channel/>
                <div className='w-full h-[1px] bg-zinc-700 mt-4 px-2'></div>
                <h4 className='text-[1.5vw] mt-3 px-2'>
                    Subscriptions
                </h4>
                <Subscribe/>
                <div className='w-full h-[1px] bg-zinc-700 mt-4 px-2'></div>
            </motion.div>      
        </div>
    )}
    </AnimatePresence>
  )
}

export default Sidebar
