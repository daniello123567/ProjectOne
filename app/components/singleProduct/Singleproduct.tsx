"use client"
import React from 'react'
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from 'next/image'
import localFont from 'next/font/local'
import Imagecarousel from './Imagecarousel'
import Nameprice from './Nameprice'
import Color from './Color'
import Details from './Accordion'
import Instock from './Instock'
const arrayOfImages = ["1", "1", "1", "1", "1"]
const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })
const bigFont = localFont({ src: "../../fonts/dd.woff2" });
const changeLater = ["1"]
function Singleproduct() {
  return (
    <div className='w-full md:p-[1em] md:flex h-max min-h-screen pt-[1em] bg-white border border-black rounded-t-[1em]'>
      <Imagecarousel arrayOfImages={arrayOfImages}/>
      <div className='information md:w-[50%] md:h-full p-[1em] w-full h-[45%]'>
       <Nameprice Name='Sweet Earring' Price={2000}/>
        <Color color='silver'/>
     <Details details='lorememememmememe'/>
       <Instock/>
        <div className={` ${bigFont.className} w-full  h-[3.625em] justify-between flex mt-[0.5em]`}>
          <button type='button' className='h-full text-[0.875em] font-[500] tracking-[1px] w-[78%] bg-black text-white'>ADD TO BAG</button>
          <button type='button' className='bg-black w-[20%]  h-full '>
            <Image className='w-[1.5em] h-[1.5em]' alt='checjmark' src="/Wishlist.svg" width={500} height={500} />
            {/* <p className='hidden'>s</p> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
