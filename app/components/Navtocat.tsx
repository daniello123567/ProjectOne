import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const font = localFont({src:"../fonts/dd.woff2"});
const Pros= [{imageSrc:'earrings.jfif',Name:"Earrings"},{Name:"Rings",imageSrc:"rings.jfif"},{Name:"Bracelets",imageSrc:"Bracelets.jfif"},{Name:"Necklaces",imageSrc:"Necklace.jfif"}];
type ros = {imageSrc:string,Name:string}
function Navtocat() {
  const Box = ({imageSrc,Name}:ros)=>{
    return  <div className='w-full relative md:h-[17.4739375em] md:w-[25%]  h-[18.203125em]  border border-black bg-yellow-400 '>
    <Image className='w-full h-full object-cover' width={500} height={500} src={`/herodesign/${imageSrc}`} alt={`${Name}`}/>
  <div className={`${font.className} md:text-center  text-[0.875em] font-[500] tracking-[1px] uppercase absolute bottom-0 py-[0.75em] px-[1em] bg-black text-white w-full`}>{Name}</div>
  </div>
  }
  return (
    <div className='grid md:flex md:w-full grid-rows-2  grid-cols-2 '>
      {Pros.map((info:ros)=>{
        return <Box key={`${info.Name}+${info.imageSrc}`} Name={info.Name} imageSrc={info.imageSrc} />
      })}
    </div>
  )
}

export default Navtocat
