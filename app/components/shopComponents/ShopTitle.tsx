import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const shoptitlefont = localFont({src:"../../fonts/KapraNeueW05-SemiBold.woff2"})
function ShopTitle() {
  return (
    <div className='flex justify-between sticky md:top-[3.4em] top-[6.6em] border border-b-2 border-b-gray-100 h-max  p-[.4em]'>
       <p className={`${shoptitlefont.className} text-[2rem] font-[600] tracking-[1px]`}>SHOP ALL</p>
       <Image className='w-[2em]' alt='cart' height={300} width={500} src="/shopicons/Shopsvg.svg"/>
    </div>
  )
}

export default ShopTitle
