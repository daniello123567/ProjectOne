import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const shoptitlefont = localFont({src:"../../fonts/KapraNeueW05-SemiBold.woff2"})
function ShopTitle() {
  return (
    <div className='flex top-[3.6em] lg:z-[99999] z-[50] bg-white justify-between border-b-0 lg:top-[3.6em] sticky md:top-[3.6em] border  border-b-gray-100 h-max  p-[.4em]'>
       <p className={`${shoptitlefont.className} text-[2rem] font-[600] tracking-[1px]`}>SHOP</p>

       <Image className='w-[2em]' alt='cart' height={300} width={500} src="/shopicons/Shopsvg.svg"/>
    </div>
  )
}

export default ShopTitle
