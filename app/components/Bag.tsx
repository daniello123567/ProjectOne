"use client"
import Image from 'next/image'
import {motion} from "framer-motion"
import React, { useContext, useState } from 'react'
import localFont from 'next/font/local'
import globalStore from '../store/globalstore'
import BagInBag from './Bagcomponents/BagInBag'
import Wishlist from './wishlistcomponents/Wishlist'
const Active = localFont({src:"../fonts/dd.woff2"});
const nonActive = localFont({src:"../fonts/smallfontforbrondon.woff2"});
const variants = {
 stayDown:{
    y:2000
  },
 comeUp:{
  y:0,
  transition:{
    duration:0.1,
    ease:"easeIn"
  }
 },
 exit:{
  y:1000,
  transition:{
    duration:0.1,
    ease:"easeOut"
  }
 }
}
function BagShop() {
  const {setBagVisibility,activePage,setactivePage,Bag,wishlist} = useContext(globalStore);

  return (
    <div className='fixed  bottom-0 z-[99999] lg:pt-0 pt-[4em] bg-white/50  backdrop-blur-sm w-full h-screen'>
      <motion.div exit="exit" initial="stayDown" variants={variants} animate="comeUp" className='bg-white lg:w-[100%] lg:h-full lg:rounded-none border-t  pt-[4em] relative rounded-t-[1em] h-full w-full'>
        <Image onClick={()=>setBagVisibility(false)} className='w-[1.5em] cursor-pointer absolute top-[1em] right-[1em]  h-[1.5em]' src="/Cancel.svg" width={500} height={500} alt='cancel'/>
        <div className='w-full flex border-b border-b-black justify-between h-[1.84375em]'>
          <button onClick={()=>setactivePage('Bag')} type='button' className={`h-full font-[400] pb-[0.25em] ${activePage=="Bag"? Active.className  + ' border-b-2 font-[500] border-b-black ': nonActive.className} w-[50%]`}>{'Bag' + `(${Bag.length})`}</button>
          <button  onClick={()=>setactivePage('Wishlist')} type='button' className={`h-full font-[400] pb-[0.25em] ${activePage=="Wishlist"? Active.className + ' border-b-2 font-[500] border-b-black': nonActive.className } w-[50%]`}>{'Wishlist' + `(${wishlist.length})`}</button>
        </div>
        {activePage==="Bag"&&<BagInBag/>}
        {activePage==="Wishlist"&&<Wishlist/>}
      </motion.div>

    </div>
  )
}

export default BagShop
