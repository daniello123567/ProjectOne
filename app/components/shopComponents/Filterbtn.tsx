import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const myFont = localFont({src:"../../fonts/dd.woff2"})
function Filterbtn() {
  return (
    <button className={`${myFont.className} flex items-center gap-x-[0.2em] underline-offset-2 text-[0.875em] text-[#626262] font-[500] tracking-[1px] underline`} type='button'>
      <Image src="/filter.svg" width={500} className='w-[1em] h-[1em]' height={300} alt='filter'/>
      FILTERS(0)
    </button>
  )
}

export default Filterbtn
