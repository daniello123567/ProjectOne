import React from 'react'
import localFont from 'next/font/local'
import { useContext } from 'react'
import globalStore from '@/app/store/globalstore'
import { BagVisiblity } from '@/app/store/Store'
const font = localFont({src:"../../fonts/dd.woff2"})
function Empty() {
  const { hideBag} = BagVisiblity()

  return (
    <div className='w-full flex items-center justify-center flex-col text-center'>
      <p className={`${font.className} font-[500] text-center lg:text-[2em] mt-[2em] mb-[.6em] text-[1.25em]`}>Your Wishlist is currently empty</p>
      <button onClick={hideBag} type='button' className={`${font.className}  lg:w-[40%] text-[0.875em] active:text-white active:bg-black w-[90%] border border-[#626262] h-[2.875em]`}>SHOP ALL</button>
    </div>
  )
}

export default Empty
