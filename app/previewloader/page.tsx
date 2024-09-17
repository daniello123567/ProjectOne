"use client"
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import {motion} from "framer-motion"
const font = localFont({src:"../fonts/Kalmansk-Regular.otf"})
function Loader() {
  return (
    <motion.div exit={{opacity:0,transition:{duration:0.5}}} transition={{duration:0.5,ease:"easeOut"}} className='bg-white h-screen'>
     <div className='w-full h-full flex justify-center items-center'>
      <motion.p animate={{opacity:1,transition:{duration:1}}} initial={{opacity:0}} exit={{opacity:0,transition:{duration:1}}} className={`${font.className} z-50 tracking-tight text-[3em]`}>NUBE</motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
