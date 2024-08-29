import React from 'react'
import localFont from 'next/font/local'
const heroText = localFont({src:"../fonts/kapranueue.woff2"})
const subheadingFont = localFont({src:"../fonts/dd.woff2"})
function Hero() {
  return (
    <div className="hero">
      <div className='w-full py-[2.5em] text-white text-center px-[1em]'>
        <p className={`${heroText.className} md:text-[3em] tracking-[1px] text-[2em] font-[600]`}>Jewelry</p>
      <p className={`${subheadingFont.className} font-[500] underline text-[0.875em]`}>SHOP NOW</p>
      </div>
    </div>
  )
}

export default Hero
