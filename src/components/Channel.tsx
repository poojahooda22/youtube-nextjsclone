import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { MdPlaylistPlay } from "react-icons/md";



const Channel = () => {
  return (
    <div>
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
    </div>
  )
}

export default Channel
