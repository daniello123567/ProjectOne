import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../fonts/KapraNeueW05-SemiBold.woff2"})
const fon2 = localFont({src:"../fonts/smallfontforbrondon.woff2"})
function Heromsg() {
  return (
    <div className='p-[1em] lg:mb-[1em]'>
      <p className={`${font.className} md:text-[2em] md:tracking-[0.48px] font-[600] tracking-[0.36px] text-[1.5em]`}>NEW JEWELRY + YOU</p>
      <p className={`${fon2.className} font-[400]`}>Meet the perfect charms to complete your look.</p>
    </div>
  )
}

export default Heromsg
