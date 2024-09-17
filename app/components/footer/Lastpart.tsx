"use client"
import React from 'react'
import localFont from 'next/font/local'
import { ProductsTate } from '@/app/store/Store'
const font = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
function Lastpart() {
  const {ProductsArr,isPendingg} = ProductsTate()

  return (
    <div>
      <p className={`${font.className} underline mt-[1em] text-[1rem] font-[400] text-center`}>You&apos;ve viewed {!isPendingg&&ProductsArr.length} products.
     </p>
    </div>
  )
}

export default Lastpart
