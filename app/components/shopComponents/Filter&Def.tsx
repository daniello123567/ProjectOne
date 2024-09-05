"use client"
import React, { useEffect, useRef, useState } from 'react'
import localFont from 'next/font/local'
import Filterbtn from "./Filterbtn"
import Filterdrop from './Filterdrop'
import Image from 'next/image'
import Availablefiltbtn from './Availablefiltbtn'
import { useRouter, useSearchParams } from 'next/navigation'
const shoptitlefont2 = localFont({src:"../../fonts/dd.woff2"});

function Filters(){
  const searchParams = useSearchParams()
  const params:any = new URLSearchParams(searchParams);

  let presentfilters:Array<Record<string,string>> = []
for(const [dude,value] of params.entries()){
      presentfilters.push({query:dude,value})
}


  return (
    <div className='px-[1em] md:pb-[1em] filters items-center mt-[1em] w-full'>
      <Filterbtn presentFilterCount={presentfilters.length} />
    <div className='flex md:flex-nowrap flex-wrap py-[.8em] gap-[.6em] mt-[.2em]'>{presentfilters.map((filter)=>{
      return <Availablefiltbtn keyVal={filter.query} key={filter.value} filter={filter.value}/>
    })}</div>

    </div>
  )
}

export default Filters
