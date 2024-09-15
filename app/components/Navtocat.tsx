"use client"
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import {motion} from "framer-motion"
const font = localFont({src:"../fonts/dd.woff2"});
const Pros= [{HoverImage:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/Bottega%20Veneta.jfif?t=2024-09-15T22%3A41%3A20.631Z",imageSrc:'https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/aethestic.jfif?t=2024-09-11T21%3A48%3A58.137Z',Name:"Earrings"},
  {Name:"Rings",HoverImage:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/SOLANGE%20RING%20-%208.jfif?t=2024-09-15T22%3A50%3A37.052Z",imageSrc:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/ring.jfif?t=2024-09-11T21%3A52%3A30.319Z"},
  {Name:"Bracelets",HoverImage:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/20%20Summer%20Capsule%20Wardrobe%20Ideas_%20Beach%20to%20Europe%20Essentials.jfif",imageSrc:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/bracelets.jfif"}
  ,{Name:"Necklaces",HoverImage:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/download%20(5).jfif?t=2024-09-15T22%3A51%3A42.663Z",imageSrc:"https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/necklace.jfif"}];
type ros = {imageSrc:string,Name:string,HoverImage:string}
function Navtocat() {
  const Box = ({imageSrc,Name,HoverImage}:ros)=>{
    return  <div className='w-full group relative  md:h-[17.4739375em] md:w-[25%]  h-[18.203125em]  border border-black '>
    <Image blurDataURL={imageSrc}  placeholder="blur" className='w-full transition-all duration-100 group-hover:hidden h-full object-cover' width={500} height={500} src={`${imageSrc}`} alt={`${Name}`}/>
    <motion.img initial={{opacity:0.5}} whileHover={{opacity:1}} transition={{duration:.2}} className='w-full  hidden group-hover:block h-full object-cover' src={`${HoverImage}`} alt={`${Name}`}/>
    <div className={`${font.className} md:text-center  text-[0.875em] font-[500] tracking-[1px] uppercase absolute bottom-0 py-[0.75em] px-[1em]  text-white w-full`}>{Name}</div>
    <span className='w-[80%] group-hover:scale-x-100 scale-x-0 h-[.1em] bg-white absolute bottom-[.4em] origin-left transform  transition-transform duration-[400ms] ease-out'></span>
    </div>
  }
  return (
    <div className='grid md:flex md:w-full grid-rows-2  grid-cols-2 '>
      {Pros.map((info:ros)=>{
        return <Box HoverImage={info.HoverImage} key={`${info.Name}+${info.imageSrc}`} Name={info.Name} imageSrc={info.imageSrc} />
      })}
    </div>
  )
}

export default Navtocat
