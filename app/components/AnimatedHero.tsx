"use client"
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import Image from 'next/image'

function AnimatedHero() {
  const images = [
    "image1.jfif",
    "image2.jfif",
    "image3.jfif",
    "image4.jfif",
  ]
  return (
    <div className='w-full md:hidden h-full'>
      <Fade indicators={false} arrows={false}>
        <div className='w-full h-full'>
          <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`/animatedheroimg/${images[0]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`/animatedheroimg/${images[1]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`/animatedheroimg/${images[2]}`}/>
        </div>
        <div className='w-full h-full'>
        <Image className='w-full h-full object-cover' alt='image' width={500} height={500} src={`/animatedheroimg/${images[3]}`}/>
        </div>
      </Fade>
    </div>
  )
}

export default AnimatedHero
