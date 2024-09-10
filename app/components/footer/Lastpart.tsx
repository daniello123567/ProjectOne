"use client"
import React, { useContext } from 'react'
import localFont from 'next/font/local'
import globalStore from '@/app/store/globalstore'
const font = localFont({src:"../../fonts/smallfontforbrondon.woff2"})

function Lastpart() {
  const {data} = useContext(globalStore)
  return (
    <div>
      <p className={`${font.className} underline mt-[1em] text-[1rem] font-[400] text-center`}>You&apos;ve viewed {data&&data.length} products.
     </p>
    </div>
  )
}

export default Lastpart
