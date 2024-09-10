import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })

function Instock() {
  return (
    <div className='flex mt-[1em] items-center gap-[0.25em]'>
          <Image className='h-[1em] w-[1em]' alt='checjmark' src="Checkmark.svg" width={500} height={500} />
          <p className={`${smallFont.className} text-[0.875em]`}>In-stock</p>
        </div>
  )
}

export default Instock
