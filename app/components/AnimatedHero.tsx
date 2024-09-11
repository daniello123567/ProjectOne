"use client"
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import Image from 'next/image'

function AnimatedHero() {
  const images = [
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image1.jfif",
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image2.jfif?t=2024-09-11T21%3A57%3A32.493Z",
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image4.jfif?t=2024-09-11T22%3A00%3A04.491Z",
  ]
  return (
    <div className='w-full md:hidden h-full'>
      <Fade indicators={false} arrows={false}>
        <div className='w-full h-full'>
          <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`${images[0]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`${images[1]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`${images[2]}`}/>
        </div>
       
      </Fade>
    </div>
  )
}

export default AnimatedHero
