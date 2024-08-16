import React from 'react'
import { TbBrandYoutubeKids } from "react-icons/tb";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";

const YouTube = () => {
  return (
    <div>
        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <TbBrandYoutubeKids  size={20} />
            <h4 className='text-[1.3vw]'>Youtube News</h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <SiYoutubestudio size={20} />
            <h4 className='text-[1.3vw]'>Youtube studio</h4>
        </div>

        <div className='mt-[2vw] flex items-center gap-4 px-2'>
            <SiYoutubemusic  size={20} />
            <h4 className='text-[1.3vw]'>Youtube News</h4>
        </div>
    </div>
  )
}

export default YouTube
