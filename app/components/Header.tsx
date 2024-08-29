import React from 'react'
import localFont from "next/font/local"
import Links from './header/Links'
const LogoFont = localFont({ src: "../fonts/dw-futura-light.woff2" })
function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className={`${LogoFont.className} logo`}>NUBE</div>
         <Links/>
      </div>
    </div>
  )
}

export default Header
