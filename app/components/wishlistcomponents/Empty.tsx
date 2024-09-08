import React from 'react'
import localFont from 'next/font/local'
import { useContext } from 'react'
import globalStore from '@/app/store/globalstore'
const font = localFont({src:"../../fonts/dd.woff2"})
function Empty() {
  const {setBagVisibility} = useContext(globalStore)
  const hideBag = ()=>{
   setBagVisibility(false)
  }
  return (
    <div className='w-full absolute'>
      <p className={`${font.className} font-[500] text-center mt-[2em] mb-[.6em] text-[1.25em]`}>Your Wishlist is currently empty</p>
      <button onClick={hideBag} type='button' className={`${font.className} text-[0.875em] active:text-white active:bg-black w-[90%] border border-[#626262] h-[2.875em]`}>SHOP ALL</button>
    </div>
  )
}

export default Empty
