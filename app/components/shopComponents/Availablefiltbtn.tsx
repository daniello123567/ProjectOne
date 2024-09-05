"use client"
import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { useRouter, useSearchParams } from 'next/navigation';
const shoptitlefont1= localFont({src:"../../fonts/smallfontforbrondon.woff2"});

function Availablefiltbtn({filter,keyVal}:{filter:string,keyVal:string}) {
  const searchparams = useSearchParams();
  const params = new URLSearchParams(searchparams);
  const {replace} = useRouter()
  const handleDeletefromUrl = ()=>{
   params.delete(keyVal,filter)
    replace(`?${params}`,{scroll:false})
  }
  return (
    <button onClick={handleDeletefromUrl} type='button' className={` ${shoptitlefont1.className} h-[1.875em] flex items-center text-[0.75em] font-[400] rounded-full w-max outline outline-1 outline-black py-[.25em] px-[0.5em]`}>{filter}
        <Image className='w-[1em] h-[1em]' src="/Cross.svg" alt='cancel' width={500} height={500}/>
      </button>
  )
}

export default Availablefiltbtn
