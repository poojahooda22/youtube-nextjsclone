import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";


const Card = (props: any) => {
  return (

    <div className='w-full md:w-[50vw] lg:w-[34vw] xl:w-[25vw] 2xl:w-[16vw] p-4'>
        <div className='w-full h-[48vw] md:h-[22vw] lg:h-[19vw] xl:h-[15vw] 2xl:h-[9vw]'>
            <img 
                src={props.image} 
                alt="placeholder"
                className='w-full h-full object-cover 
                rounded-xl' 
            />
        </div>
        <div 
                className='w-full flex justify-between 
                items-start mt-[4vw] 
                md:mt-[2vw] lg:mt-[1vw] xl:mt-[10px] 
                px-[0vw] sm:px-0'
        >
                <div className='flex gap-[2.4vw] sm:gap-[1.2vw]'>
                    <img 
                        src={props.thumbImage} 
                        alt="placeholder" 
                        className='w-10 h-10 md:w-8 md:h-8 lg:w-10 lg:h-10 
                        object-cover rounded-full'
                    />
                    <div className='w-full'>
                        <h1 className='text-[3.6vw] md:text-[1.9vw] 
                            lg:text-[1.5vw] xl:text-[1vw] 
                            2xl:text-[.7vw] font-medium'
                        >
                            {props.title}
                        </h1>
                        <div 
                            className='flex gap-2 md:gap-0 md:flex-col 
                            text-[2.5vw] md:text-[1.6vw] 
                            lg:text-[1.4vw] xl:text-[1vw] 2xl:text-[.6vw] 
                            text-zinc-400 pt-[.5vw] md:pt-[1px]'
                        >
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
                    className='md:w-[3vw] lg:w-[2.5vw] xl:w-[2vw] text-[#ffffff]'
                />
        </div>
    </div>
  )
}

export default Card
