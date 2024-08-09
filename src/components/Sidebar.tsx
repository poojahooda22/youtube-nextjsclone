import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[10vw] h-full bg-zinc-900'>
        <div className=' flex items-start'>
        <IoMenuSharp size={30} color='#999999' className='hidden sm:block' />  
        <img src="/ytlogo.svg" alt="logo" className='w-28 h-8' />  
      </div>
        <div>Hello</div>
    </div>
  )
}

export default Sidebar
