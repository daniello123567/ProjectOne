import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const heroText = localFont({src:"../fonts/kapranueue.woff2"})
const subheadingFont = localFont({src:"../fonts/dd.woff2"})
function Hero() {
  return (
    <div className="hero">
      <div className='w-full grid grid-rows-2 gap-[1.5em] grid-cols-3  h-full bg-white'>
        <div className='w-full h-[100%] bg-red-600'>
          <Image src="/heroimg1.gif" className='w-full object-cover h-full' alt='heroimg' width={500} height={300}/>
        </div>
        <div className='w-full h-[100%] bg-red-600'>
        <Image src="/uu.jpg" className='w-full object-cover h-full' alt='heroimg' width={500} height={300}/>
        </div>
        <div className='w-full h-[100%] bg-red-600'>
        <Image src="/hero.gif" className='w-full object-cover h-full' alt='heroimg' width={500} height={300}/>
        </div>
        <div className='w-full h-[100%]  bg-red-600'>
        <Image src="/hero2.png" className='w-full object-cover h-full' alt='heroimg' width={500} height={300}/>
        </div>
        <div className='w-full h-[100%] bg-red-600'>
        <Image src="/ihg.gif" className='w-full object-cover h-full' alt='heroimg' width={500} height={300}/>

        </div>
        <div className='w-full h-[100%] bg-red-600'></div>
      </div>
      {/* <div className='w-full py-[2.5em] text-white text-center px-[1em]'> */}
        {/* <p className={`${heroText.className} md:text-[3em] tracking-[1px] text-[2em] font-[600]`}>Jewelry</p> */}
      {/* <p className={`${subheadingFont.className} font-[500] underline text-[0.875em]`}>SHOP NOW</p> */}
      {/* </div> */}
    </div>
  )
}

export default Hero
