import React from 'react'
import localFont from 'next/font/local'
const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })

function Color({color}:{color:string}) {
  return (
    <div className='flex flex-col gap-[0.25em]'>
    <p className={`${smallFont.className} text-[0.875em]`}>Color - {color}</p>
    <div className='w-[1.875em] h-[1.875em] outline-1 p-[0.3em] outline-black bg-gray-600 rounded-full'></div>
  </div>
  )
}

export default Color
