'use client'
import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import Explore from './Explore';
import YouTube from './YouTube';
import { useSidebarContext } from './SidebarContext';
import { AnimatePresence, motion } from 'framer-motion';

const Sidebar2 = () => {
    const { isVisible } = useSidebarContext();
  return (
    <AnimatePresence>
        {!isVisible &&  (
            <div 
                className='absolute top-0 w-[22vw] 
                h-full bg-zinc-900 py-[1.5vw] px-[1.5vw] overflow-hidden'   
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
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <Explore/>
                <div className='w-full h-[1px] bg-zinc-700 mt-4 px-2'></div>
                <YouTube/>
            </motion.div>
        </div>
        )}
    </AnimatePresence>
  )
}

export default Sidebar2
