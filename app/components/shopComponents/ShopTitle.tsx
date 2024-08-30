import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const shoptitlefont = localFont({src:"../../fonts/KapraNeueW05-SemiBold.woff2"})
const shoptitlefont2 = localFont({src:"../../fonts/dd.woff2"})
function ShopTitle() {
  return (
    <div className='flex z-[50] bg-white justify-between lg:top-[3.8em] sticky md:top-[3.4em] top-[6.6em] border border-b-2 border-b-gray-100 h-max  p-[.4em]'>
       <p className={`${shoptitlefont.className} text-[2rem] font-[600] tracking-[1px]`}>SHOP ALL</p>
       <div className={`${shoptitlefont2.className} hidden  uppercase gap-[2em] text-[0.875em] font-[500] tracking-[1px] sm:flex items-center`}>
        <p>Earrings</p>
        <p>Bracelets</p>
        <p>Rings</p>
        <p>Necklaces</p>

       </div>
       <Image className='w-[2em]' alt='cart' height={300} width={500} src="/shopicons/Shopsvg.svg"/>
    </div>
  )
}

export default ShopTitle
