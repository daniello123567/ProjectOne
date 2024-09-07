"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import globalStore from '../store/globalstore'

function Mobileheader() {
  const {setBagVisibility,setactivePage} = useContext(globalStore)
  return (
    <>
    <div className='w-full lg:h-[4.5625em] z-[99999] p-[1em] justify-between flex items-center bg-white fixed top-0 h-[3.5625em] border-b border-b-black'>
    <div className='flex'>
      <Image className='w-[1.5em] lg:hidden mr-[1em] h-[1.5em]' src="/headericons/Menu.svg" alt='menu' width={500} height={500}/>
    <div className=' bg-purple-700 h-[1.321875em] w-[7.6875em]'></div>
    </div>
    <div className='icons gap-[1em] flex'>
    <Image className='w-[1em] mr-[1em] h-[1em]' src="/headericons/Search.svg" alt='menu' width={500} height={500}/>
    <Image onClick={()=>{setBagVisibility(true);setactivePage("Wishlist")}} className='w-[1em] mr-[1em] h-[1em]' src="/headericons/Wishlist.svg" alt='menu' width={500} height={500}/>
    <Image onClick={()=>{setBagVisibility(true);setactivePage('Bag')}} className='w-[1em] mr-[1em] h-[1em]' src="/headericons/Cart.svg" alt='menu' width={500} height={500}/>
    </div>
    </div>
    </>
  )
}

export default Mobileheader
