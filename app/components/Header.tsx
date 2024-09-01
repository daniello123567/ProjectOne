"use client"
import React, { act, useEffect, useRef } from 'react'
import localFont from "next/font/local"
import Links from './header/Links'
import { useMediaQuery } from 'react-responsive'
const LogoFont = localFont({ src: "../fonts/dw-futura-light.woff2" })
function Header({activatedynamicheader}:{activatedynamicheader?:boolean}) {
  const isbetweenlargeandmediumscreen = useMediaQuery({ minWidth: 992, maxWidth: 991 });
  useEffect(()=>{
    console.log('changes');
    
  },[isbetweenlargeandmediumscreen])
  return (
    <div  className={!activatedynamicheader?'header':'header2'}>
      <div className='header-content'>
        {!activatedynamicheader&&<div className={`${LogoFont.className} logo`}>NUBE</div>}
         <Links isOtherlinksVisible={activatedynamicheader}/>
      </div>
    </div>
  )
}

export default Header
