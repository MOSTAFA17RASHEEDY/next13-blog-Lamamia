'use client'

import React, { useContext } from 'react'
import style from './DarkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'
function DarkModeToggle() {

    const {mode , toggle} = useContext(ThemeContext)
  return (
    <div className={style.container} onClick={toggle}>
        <div className={style.icon}>🌙</div>
        <div className={style.icon}>🌟</div>
        <div className={style.ball} 
        style={mode === 'light' ? {left : '2px'}:{right:'2px'}}/>
    </div>
  )
}

export default DarkModeToggle
