import React from 'react';
import { IoMdAdd } from "react-icons/io";
import styles from './FlashButton.module.css'

const FlashButton = () => {
  return (
    <button className={`${styles.btn1} relative flex items-center bg-blue-500 text-white`}>
        <IoMdAdd size={24} className={`${styles.icon}`} />
        <span>New Module</span>
       
        <img src='./flash1.svg' className={`${styles.flashanim} flashanim absolute w-[100%] h-[100%] top-0 left-0 translate-x-[-50%] ml-6`}/>
        <img src='./flashMini.svg' className={`${styles.flashanim} flashanim absolute w-[100%] h-[100%] top-0 left-0 translate-x-[-50%] `}/>
    </button>
  )
}

export default FlashButton
