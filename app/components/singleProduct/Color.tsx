import React from 'react'
import localFont from 'next/font/local'
const smallFont = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })

function Color({color}:{color:string}) {
  const Gold = ()=>{
    return<div className='w-[1.875em] h-[1.875em] outline-1 p-[0.3em] outline-black bg-[#EAC37C] rounded-full'></div>

  }
  const Silver = ()=>{
    return<div className='w-[1.875em] h-[1.875em] outline-1 p-[0.3em] outline-black bg-[#C8C8C8] rounded-full'></div>

  }
  const ColorChooser = (color:string)=>{
    const Colore = color.toLowerCase()
    if(Colore=="gold"){
      return <Gold/>
    }
    else if(Colore=="silver"){
      return <Silver/>
    }
  }
  return (
    <div className='flex flex-col gap-[0.25em]'>
    <p className={`${smallFont.className} text-[0.875em]`}>Color - {color}</p>
    {ColorChooser(color)}
  </div>
  )
}

export default Color
