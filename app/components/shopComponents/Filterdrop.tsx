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
    <p className='flex items-center cursor-pointer gap-[0.2em] underline-offset-2 text-[0.875em] text-[#626262] font-[500] tracking-[1px] underline' onClick={showDropdown}>SORT</p>
    {isVisibe&&<div className='w-max px-[1em] py-[1em] uppercase absolute left-[-8em] rounded top-[1.5em] shadow-xl'>
      <p>Alphabet:A-Z</p>
      <p>Alphabet:Z-A</p>
      <p>PRICE:LOW-HIGH</p>
      <p>price:high-low</p>
    </div>}
  </div>
  )
}

export default Filterdrop
