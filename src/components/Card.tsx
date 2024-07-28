import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";


const Card = () => {
  return (
    <div className=''>
        <div className='w-[50vw] h-[60vw] '>
            <div className='w-full rounded-lg'>
                <img 
                    src="https://img.freepik.com/free-psd/3d-rendering-gamer-room-illustration_23-2151642704.jpg?uid=R3651325&ga=GA1.1.678771452.1700385267" 
                    alt="placeholder"
                    className='w-full h-[24vw] object-cover rounded-lg' 
                />
            </div>
            <div className='w-full flex justify-between mt-[1.6vw]'>
                <div className='flex gap-[1.5vw]'>
                    <img 
                        src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?uid=R3651325&ga=GA1.1.678771452.1700385267&semt=sph" 
                        alt="placeholder" 
                        className='w-10 h-10 object-cover rounded-full'
                    />
                    <div className='w-2/3'>
                        <h1 className='text-[1.8vw]'>
                            Paris Olympics 2024: Manu Bhaker wins historic bronze in women’s...
                        </h1>
                        <div>
                            <h3 className='text-[1.5vw]'>
                                The Hindu</h3>
                            {/* //icon */}
                        </div>
                        <div className='flex gap-2 text-[1.5vw]'>
                            <p>1.6K views</p>
                            <p>25 minutes ago</p>
                        </div>
                    </div>
                </div>
                
                <BiDotsVerticalRounded 
                    className='w-8 h-8 text-[#ffffff]'
                />
            </div>
        </div>
    </div>
  )
}

export default Card
