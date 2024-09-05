import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const shoptitlefont = localFont({src:"../../fonts/KapraNeueW05-SemiBold.woff2"})
function ShopTitle() {
  return (
    <div className='flex bg-white gap-[.8em] md:mx-auto md:w-max h-max  p-[.4em]'>
       <p className={`${shoptitlefont.className} text-[2rem] font-[600] tracking-[1px]`}>SHOP</p>

       <Image className='w-[2em]' alt='cart' height={300} width={500} src="/shopicons/Shopsvg.svg"/>
    </div>
  )
}

export default ShopTitle
