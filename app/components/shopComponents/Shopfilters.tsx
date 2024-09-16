"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import localFont from 'next/font/local'
import Filters from './Filter&Def'
import { useSearchParams,useRouter } from 'next/navigation'
import Filterbtn from './Filterbtn'
const Font = localFont({src:"../../fonts/dd.woff2"});

function Shopfilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const checkIfFilterisSelected = (filter:string)=>{
       const searchQueriesforproductype:string[] = params.getAll('Product-type');
       if(searchQueriesforproductype.includes(filter)){
        return true
       }else{
        return false
       }
  }
  const handleProducttype = (productype:string)=>{
    if(!checkIfFilterisSelected(productype)){
     params.append("Product-type",productype);
     router.replace(`?${params}`,{scroll:false});}else{
      params.delete("Product-type",productype)
      router.replace(`?${params}`,{scroll:false})
     }
  }
  const allProductTypefilters = params.getAll("Product-type")
  return (
    <div className='bg-white border-none px-[1em] overflow-hidden z-[30000] py-[1em]  min-h-[7.25em] lg:top-[4.5em] h-max sticky top-[3em]'>
    <div className='flex  daddy:px-0 h-max overflow-auto bg-white w-max gap-[.4em]'>
      <div onClick={()=>handleProducttype("Earring")} className={`${Font.className} active:opacity-50 lg:px-[1em] lg:py-[0.9] active:bg-black ${allProductTypefilters.includes("Earring")&&"border border-black"} active:text-white font-[500] tracking-[1px] text-[0.75em] uppercase  bg-[#EDEDED] py-[0.5em] w-max px-[0.8em]`}>Earrings</div>
      <div onClick={()=>handleProducttype("Necklace")} className={`${Font.className} active:opacity-50 lg:px-[1em] lg:py-[0.9] active:bg-black ${allProductTypefilters.includes("Necklace")&&"border border-black"} active:text-white font-[500] tracking-[1px] text-[0.75em] uppercase  bg-[#EDEDED] py-[0.5em] w-max px-[0.8em]`}>Necklaces</div>
      <div onClick={()=>handleProducttype("Ring")} className={`${Font.className} active:opacity-50 lg:px-[1em] lg:py-[0.9] active:bg-black active:text-white ${allProductTypefilters.includes("Ring")&&"border border-black"} font-[500] tracking-[1px] text-[0.75em]  uppercase bg-[#EDEDED] py-[0.5em] w-max px-[0.8em]`}>Rings</div>
      <div onClick={()=>handleProducttype("Bracelet")} className={`${Font.className} active:opacity-50 lg:px-[1em] lg:py-[0.9] active:bg-black active:text-white ${allProductTypefilters.includes("Bracelet")&&"border border-black"} font-[500] tracking-[1px] text-[0.75em] uppercase bg-[#EDEDED] py-[0.5em] w-max px-[0.8em]`}>Bracelets</div>
    </div>
    <Filters/>
    </div>
  )
}

export default Shopfilters
