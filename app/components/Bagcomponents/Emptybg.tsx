"use client"
import React, { useContext } from 'react'
import localFont from 'next/font/local'
import globalStore from '@/app/store/globalstore'
const font = localFont({src:"../../fonts/dd.woff2"})
function Emptybg() {
  const {setBagVisibility} = useContext(globalStore)
 const hideBag = ()=>{
  setBagVisibility(false)
 }
  return (
    <div className={`${font.className} px-[1em] w-full  pt-[2em] `}>
      <p className={`${font.className} mb-[1em] text-[1.25em] text-center  text-[#101010]`}>Your Bag is Empty. Shop Our Fine Jewelries</p>
     <button onClick={hideBag} type='button' className={`${font.className} text-[0.875em] active:text-white active:bg-black w-full border border-[#626262] h-[2.875em]`}>SHOP ALL</button>
      </div>
  )
}

export default Emptybg
