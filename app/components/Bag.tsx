"use client"
import Image from 'next/image'
import {motion} from "framer-motion"
import React from 'react'
import localFont from 'next/font/local'
import BagInBag from './Bagcomponents/BagInBag'
import Wishlister from './wishlistcomponents/Wishlist'
import myStore, { ActiveBagPage, BagVisiblity } from '../store/Store'
import { Wishlist } from '../store/Store'
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
  const {Bag} = myStore();
  const {wishlist} = Wishlist();
  const {hideBag} = BagVisiblity();
  const {activePage,setActivePage} = ActiveBagPage();
  return (
    <div className='fixed  bottom-0 z-[99999] lg:pt-0 pt-[4em] bg-white/50  backdrop-blur-sm w-full h-screen'>
      <motion.div exit="exit" initial="stayDown" variants={variants} animate="comeUp" className='bg-white lg:w-[100%] lg:h-full lg:rounded-none border-t  pt-[4em] relative rounded-t-[1em] h-full w-full'>
        <Image onClick={()=>hideBag()} className='w-[1.5em] cursor-pointer absolute top-[1em] right-[1em]  h-[1.5em]' src="/Cancel.svg" width={500} height={500} alt='cancel'/>
        <div className='w-full flex border-b border-b-black justify-between h-[1.84375em]'>
          <button onClick={()=>setActivePage('Bag')} type='button' className={`h-full font-[400] pb-[0.25em] ${activePage=="Bag"? Active.className  + ' border-b-2 font-[500] border-b-black ': nonActive.className} w-[50%]`}>{'Bag' + `(${Bag.length})`}</button>
          <button  onClick={()=>setActivePage('Wishlist')} type='button' className={`h-full font-[400] pb-[0.25em] ${activePage=="Wishlist"? Active.className + ' border-b-2 font-[500] border-b-black': nonActive.className } w-[50%]`}>{'Wishlist' + `(${wishlist.length})`}</button>
        </div>
        {activePage==="Bag"&&<BagInBag/>}
        {activePage==="Wishlist"&&<Wishlister/>}
      </motion.div>

    </div>
  )
}

export default BagShop
