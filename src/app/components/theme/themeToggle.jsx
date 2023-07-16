'use client'

import Image from 'next/image';
import dark from '@/assets/icons/dark.svg';
import light from '@/assets/icons/light.svg';
import styled from './toggleButton.module.css';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme(localStorage.getItem("theme") || "light")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <button className={styled.toggleButton} onClick={toggleTheme}>
        {theme === 'light'
          ? <Image className={styled.image} alt='sun' src={light} />
          : <Image className={styled.image} alt='moon' src={dark} />}
      </button>
    </>
  );
};

export default ThemeToggle;
