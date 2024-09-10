"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import globalStore from '../store/globalstore'
import localFont from 'next/font/local'
const font = localFont({src:"../fonts/smallfontforbrondon.woff2"})
function Mobileheader() {
  const {setBagVisibility,setactivePage,Bag,wishlist,setSearchVisible} = useContext(globalStore);
  return (
    <>
    <div className='w-full lg:h-[4.5625em] z-[99999] p-[1em] justify-between flex items-center bg-white fixed top-0 h-[3.5625em] border-b border-b-black'>
    <div className='flex'>
    <div className=' bg-purple-700 h-[1.321875em] w-[7.6875em]'></div>
    </div>
    <div className='icons gap-[1em] flex'>
    <Image onClick={()=>setSearchVisible(true)} className='w-[1em] mr-[1em] h-[1em]' src="/headericons/Search.svg" alt='menu' width={500} height={500}/>
    <div className='flex relative'>
    {wishlist.length !==0&&<div className={`${font.className} w-[.2em] absolute flex justify-center items-center text-[0.75em] p-[0.75em] text-white left-[.9em] top-[-.9em] h-[.2em] bg-black rounded-full`}>{wishlist.length}</div>}
    <Image onClick={()=>{setBagVisibility(true);setactivePage("Wishlist")}} className='w-[1em] mr-[1em] h-[1em]' src="/headericons/Wishlist.svg" alt='menu' width={500} height={500}/>
    </div>

    <div className='flex relative'>
    {Bag.length !==0&&<div className={`${font.className} w-[.3em] absolute flex justify-center items-center text-[0.75em] p-[0.75em] text-white left-[.7em] top-[-.8em] h-[.3em] bg-black rounded-full`}>{Bag.length}</div>}
      <Image onClick={()=>{setBagVisibility(true);setactivePage('Bag')}} className='w-[1em] mr-[1em] h-[1em]' src="/headericons/Cart.svg" alt='menu' width={500} height={500}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Mobileheader
