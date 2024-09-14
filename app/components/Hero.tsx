import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import AnimatedHero from './AnimatedHero'
import Arrowdown from './Productcomponents/Arrowdown'
const heroText = localFont({src:"../fonts/kapranueue.woff2"})
const subheadingFont = localFont({src:"../fonts/dd.woff2"})
const font2 = localFont({src:"../fonts/smallfontforbrondon.woff2"})
function Hero() {
  const images = [
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image1.jfif",
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image2.jfif?t=2024-09-11T21%3A57%3A32.493Z",
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image4.jfif?t=2024-09-11T22%3A00%3A04.491Z",
  ]
  return (
    <div className="relative">
         <div className='flex  justify-center  text-white items-center'>
        <div className='w-full absolute bottom-0 z-[400] py-[2.5em] text-white text-center px-[1em]'>
       <button type='button' className={`${subheadingFont.className} text-[0.875em] tracking-[1px] py-[0.75em] bg-black px-[2em]`}>SHOP JEWELRIES <Arrowdown/></button>
       </div>
    </div>
        <AnimatedHero/>
        <div className='w-full hidden  overflow-hidden md:grid grid-cols-3  h-[33em] bg-blue-600'>
          <Image className='h-full object-cover'  alt='image' src={images[0]} height={500} width={500}/>
          <Image className='h-full object-cover' alt='image' src={images[1]} height={500} width={500}/>
          <Image className='h-full object-cover' alt='image' src={images[2]} height={500} width={500}/>
        </div>
            </div>
  )
}

export default Hero
