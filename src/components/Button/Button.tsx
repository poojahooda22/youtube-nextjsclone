'use client';

import React, { useRef, useEffect } from 'react';
import styles from './Style.module.css';

const Button: React.FC = () => {
  const btnRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const parentOffset = btn.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;
    const span = btn.querySelector('span') as HTMLElement;

    if (span) {
      span.style.top = `${relY}px`;
      span.style.left = `${relX}px`;
    }
  };

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    btn.addEventListener('mouseenter', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseMove);

    // Clean up event listeners on unmount
    return () => {
      btn.removeEventListener('mouseenter', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseMove);
    };
  }, []);

  return (
    <div ref={btnRef} className={styles.buttonContainer}>
      <a className={`${styles['btn-1']} btn-1`} href="#">
        Position Aware
        <span className={`${styles['small-one']} small-one`}></span>
      </a>
    </div>
  );
};

export default Button;
