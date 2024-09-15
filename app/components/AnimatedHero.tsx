"use client"
import { Fade,Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import Image from 'next/image'
function AnimatedHero() {

  const images = [
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/image1.jfif",
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/download%20(3).jfif?t=2024-09-15T20%3A02%3A54.596Z",
    "https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/download%20(2).jfif?t=2024-09-15T20%3A00%3A26.076Z",
  ]
  return (
    <div className='w-full md:hidden h-full'>
      <Slide duration={2000} indicators={false} arrows={false}>
        <div className='w-full h-full'>
          <Image placeholder='blur' blurDataURL={images[0]} className='w-full h-full object-cover' alt='image' width={500} height={500} src={`${images[0]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image placeholder='blur' blurDataURL={images[1]} className='w-full h-full object-cover' alt='image' width={500} height={500} src={`${images[1]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image placeholder='blur' blurDataURL={images[2]} className='w-full h-full object-cover' alt='image' width={500} height={500} src={`${images[2]}`}/>
        </div>

      </Slide>
    </div>
  )
}

export default AnimatedHero
