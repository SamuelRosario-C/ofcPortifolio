'use client'

import Image from 'next/image';
import dark from '@/assets/icons/dark.svg';
import light from '@/assets/icons/light.svg';
import styled from './toggleButton.module.css';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {

  const [mounted, setMounted] = useState()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <button className={styled.toggleButton} onClick={toggleTheme}>
        {theme === 'dark'
          ? <Image className={styled.image} alt='sun' src={dark}  />
          : <Image className={styled.image} alt='moon' src={light} />}
      </button>
    </>
  );
};

export default ThemeToggle;
