import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";


const Card = (props: any) => {
  return (
    <div className=''>
        <div className='w-full sm:w-[30vw] h-[60vw] '>
            <div className='w-full h-[42vw] sm:w-[30vw] sm:h-[20vw]'>
                <img 
                    src={props.image} 
                    alt="placeholder"
                    className='w-full h-full object-cover sm:rounded-xl' 
                />
            </div>
            <div className='w-full flex justify-between items-start mt-[4vw] sm:mt-[1vw] px-[4vw] sm:px-0'>
                <div className='flex gap-[2.4vw] sm:gap-[1.2vw]'>
                    <img 
                        src={props.thumbImage} 
                        alt="placeholder" 
                        className='w-10 h-10 sm:w-16 sm:h-16 object-cover rounded-full'
                    />
                    <div className=' '>
                        <h1 className='text-[3.6vw] sm:text-[1vw]'>
                            {props.title}
                        </h1>
                        <div className='flex gap-2 text-[2.4vw] sm:text-[.8vw] text-zinc-400'>
                            <div>
                                <h3 className=''>
                                    {props.author}
                                </h3>
                            </div>
                            <div className='flex gap-2 '>
                                <p>{props.views}</p>
                                <p>{props.timeStamp}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <BiDotsVerticalRounded 
                    size={24}
                    className='sm:h-[1.5vw] text-[#ffffff]'
                />
            </div>
        </div>
    </div>
  )
}

export default Card
