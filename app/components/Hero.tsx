import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import AnimatedHero from './AnimatedHero'
const heroText = localFont({src:"../fonts/kapranueue.woff2"})
const subheadingFont = localFont({src:"../fonts/dd.woff2"})
function Hero() {
  return (
    <div className="relative">
         <div className='flex justify-center  text-white items-center'>
               <button type='button' className={`${subheadingFont.className} text-[0.875em] tracking-[1px] absolute py-[0.75em] bg-black px-[2em] z-[20000] bottom-[1em]`}>SHOP</button>
               </div>
        <AnimatedHero/>
        <div className='w-full hidden  overflow-hidden md:grid grid-cols-4  h-[33em] bg-blue-600'>
          <Image className='h-full object-cover'  alt='image' src={`/animatedheroimg/image1.jfif`} height={500} width={500}/>
          <Image className='h-full object-cover' alt='image' src={`/animatedheroimg/image2.jfif`} height={500} width={500}/>
          <Image className='h-full object-cover' alt='image' src={`/animatedheroimg/image3.jfif`} height={500} width={500}/>
          <Image className='h-full object-cover' alt='image' src={`/animatedheroimg/image4.jfif`} height={500} width={500}/>
        </div>
            </div>
  )
}

export default Hero
