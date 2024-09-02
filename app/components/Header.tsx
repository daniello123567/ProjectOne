"use client"
import React from 'react'
import {motion} from "framer-motion"
import localFont from "next/font/local"
import Links from './header/Links'
const LogoFont = localFont({ src: "../fonts/dw-futura-light.woff2" })
function Header({activatedynamicheader}:{activatedynamicheader?:boolean}) {

  return (
    <motion.div className={!activatedynamicheader?'header':'header2'}>
      <div className='header-content'>
        {!activatedynamicheader&&<div className={`${LogoFont.className} logo`}>NUBE</div>}
         <Links isOtherlinksVisible={activatedynamicheader}/>
      </div>
    </motion.div>
  )
}

export default Header
