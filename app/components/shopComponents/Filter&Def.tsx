"use client"
import React, { useEffect, useRef, useState } from 'react'
import localFont from 'next/font/local'
import Filterbtn from "./Filterbtn"
import Filterdrop from './Filterdrop'
const LogoFont2 = localFont({ src: "../../fonts/dd.woff2" })
const shoptitlefont2 = localFont({src:"../../fonts/dd.woff2"})

function Filters() {

  return (
    <div className='flex filters items-center lg:z-[3000000] sticky  z-[60] bg-white h-[3.9875em] border-t-2 border-t-gray-100 shadow-sm top-[3.5em] px-[1em] gap-x-[2em] w-full'>
      <Filterbtn/>
      <Filterdrop/>
      <div className={`${shoptitlefont2.className} hidden  uppercase gap-[2em] text-[0.875em] font-[500] tracking-[1px] sm:flex items-center`}>
        <p>Earrings</p>
        <p>Bracelets</p>
        <p>Rings</p>
        <p>Necklaces</p>

       </div>
    </div>
  )
}

export default Filters
