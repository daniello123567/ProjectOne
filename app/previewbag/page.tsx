"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import localFont from 'next/font/local'
const Active = localFont({src:"../fonts/dd.woff2"});
const nonActive = localFont({src:"../fonts/smallfontforbrondon.woff2"})
function Page() {
  const [activePage,setactivePage] = useState<string>('');
  return (
    <div className='fixed pt-[4em] bg-blue-600 w-full h-screen'>
      <div className='bg-white pt-[4em] relative rounded-t-[1em] h-full w-full'>
        <Image className='w-[1.5em] absolute top-[1em] right-[1em]  h-[1.5em]' src="/Cancel.svg" width={500} height={500} alt='cancel'/>
        <div className='w-full flex border-b border-b-black justify-between h-[1.84375em]'>
          <button onClick={()=>setactivePage('Bag')} type='button' className={`h-full font-[400] pb-[0.25em] ${activePage=="Bag"? Active.className  + ' border-b-2 font-[500] border-b-black ': nonActive.className} w-[50%]`}>Bag</button>
          <button  onClick={()=>setactivePage('Wishlist')} type='button' className={`h-full font-[400] pb-[0.25em] ${activePage=="Wishlist"? Active.className + ' border-b-2 font-[500] border-b-black': nonActive.className } w-[50%]`}>Wishlist</button>
        </div>
        {/* FOR BAG */}
        <div className='w-full h-full p-[1em] bg-red-600'>
   {/* SINGLE PRODUCT IN BAG */}
     <div className='bg-white gap-[1em] md:h-[13.03125em] flex p-[1em] border-b border-b-[#ededed] h-[8.1875em] w-full'>
           <div className='bg-blue-600 h-full w-[30%]'></div>
           <div className=' flex flex-col justify-between h-full w-[70%]'>
            <div className='flex w-full justify-between'>
              <p className={`${Active.className} font-[500]`}>Name Sample</p> <p className={`${nonActive.className} font-[400] text-[0.875em]`}>$20,000</p>
              </div>
              <p className={`${nonActive.className} text-[0.875em] font-[400]`}>Sample color</p>
            <div className='flex w-full justify-between'>
              <div className={`${nonActive.className} flex justify-between p-[0.25em] border border-[#ededed] rounded-[0.25em] items-center w-[4em] h-[1.5em]`}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
             <p className={`${nonActive.className} font-[400] text-[0.875em] underline`}>Remove</p>
            </div>
           </div>
     </div>
        </div>
      </div>

    </div>
  )
}

export default Page
