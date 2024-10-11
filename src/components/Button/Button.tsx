'use client';

import React from 'react';
import styles from './Style.module.css';
import { useRef, useEffect } from 'react';

const Button = () => {
    const btnRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;
    
        const handleMouseEnter = (e: MouseEvent) => {
          const parentOffset = btn.getBoundingClientRect();
          const relX = e.pageX - parentOffset.left;
          const relY = e.pageY - parentOffset.top;
          const span = btn.querySelector('span') as HTMLElement;
          if (span) {
            span.style.top = `${relY}px`;
            span.style.left = `${relX}px`;
          }
        };
    
        const handleMouseOut = (e: MouseEvent) => {
          const parentOffset = btn.getBoundingClientRect();
          const relX = e.pageX - parentOffset.left;
          const relY = e.pageY - parentOffset.top;
          const span = btn.querySelector('span') as HTMLElement;
          if (span) {
            span.style.top = `${relY}px`;
            span.style.left = `${relX}px`;
          }
        };
    
        btn.addEventListener('mouseenter', handleMouseEnter);
        btn.addEventListener('mouseout', handleMouseOut);
    
        // Clean up the event listeners on unmount
        return () => {
          btn.removeEventListener('mouseenter', handleMouseEnter);
          btn.removeEventListener('mouseout', handleMouseOut);
        };
      }, []);

  return (
    <div ref={btnRef} className=''>
        <a className={`${styles['btn-1']} btn-1`} href="#">
            Position Aware
            <span className={`${styles['small-one']} small-one`}></span>
        </a>
    </div>
  )
}

export default Button
