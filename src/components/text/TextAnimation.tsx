'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TextAnimation = () => {
  return (
    <div className='flex items-center justify-center'>
      <AnimatedText text="Hello World"  />
    </div>
  )
}
type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
}

const defaultVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
export const AnimatedText = ({ text, el: Wrapper = "p", className}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.4});
  return (
    <Wrapper className={className}>
      {/* <span className='sr-only'>{text}</span> */}
      <motion.span 
        ref={ref}
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1}}
        aria-hidden>
          {text.split("").map((word) => (
        <span>
          {word.split("").map((char) =>  (
            <motion.span variants={defaultVariants} className='inline-block'>{char}</motion.span>
          ))}
          <span className='inline-block'>&nbsp;</span>
        </span>
      ))}</motion.span>
    </Wrapper>
  )
}

export default TextAnimation
