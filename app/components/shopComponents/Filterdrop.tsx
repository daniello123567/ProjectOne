"use client"
import React, { useState } from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../../fonts/dd.woff2"})
function Filterdrop() {
  const[isVisibe,setisVisible] = useState<boolean>(false)
   const showDropdown = ()=>{
    setisVisible(!isVisibe)
   }
  return (
  <div className={`${font.className} relative`}>
    <p className='flex items-center cursor-pointer gap-[0.2em] underline-offset-2 text-[0.875em] text-black hover:text-[#626262] font-[500] tracking-[1px] underline' onClick={showDropdown}>SORT</p>
  </div>
  )
}

export default Filterdrop
