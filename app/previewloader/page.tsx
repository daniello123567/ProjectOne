"use client"
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import {motion} from "framer-motion"
const font = localFont({src:"../fonts/Kalmansk-Regular.otf"})
function Loader() {
  return (
    <motion.div exit={{opacity:0}} transition={{duration:0.5,ease:"easeOut"}} className='bg-yellow-300 h-screen'>
          <motion.img exit={{y:-3000}} initial={{top:"4em"}} animate={{top:0}} transition={{duration:5,ease:"easeIn",repeat:Infinity,repeatDelay:0.5}} className='w-[50%] top-0 left-0 h-[20em] absolute object-cover' alt='image' src="/animatedheroimg/image1.jfif"/>
          <motion.img exit={{y:3000}}  initial={{bottom:"4em"}} animate={{bottom:0}} transition={{duration:5,ease:"easeIn",repeat:Infinity,repeatDelay:0.5}} className='w-[50%] bottom-0 right-0 h-[20em] absolute object-cover' alt='image' src="/animatedheroimg/image3.jfif"/>
   <div className='w-full h-full flex justify-center items-center'>
      <p className={`${font.className} z-50 tracking-tight text-[3em]`}>NUBE</p>
      </div>
    </motion.div>
  )
}

export default Loader
