"use client"
import React, { useCallback, useContext, useEffect, useState } from 'react'
import localFont from 'next/font/local'
import {Switch,ChakraProvider} from "@chakra-ui/react"
import {AnimatePresence, motion} from "framer-motion"
const font = localFont({src:"../fonts/dd.woff2"});


const smallfont = localFont({src:"../fonts/smallfontforbrondon.woff2"});
import { useRouter, useSearchParams } from 'next/navigation';
import globalStore from '../store/globalstore'
function Popupfiltercomponent() {
 const [presentlyCheckedSortoption,setOption] = useState<string>();
 const [presentlyCheckedPriceoption,setPriceOption] = useState<string>();
 const [currentSetprice,setcurrentPrice] = useState<number>(8000);
 const {replace} = useRouter();
 const searchParams = useSearchParams();
 const params = new URLSearchParams(searchParams);
  const clearPricefilter=()=>{
    params.delete('fromPrice');
    params.delete('Underprice');
    replace(`?${params}`,{scroll:false})
  }
 const handleSortby=(id:string)=>{
     if(presentlyCheckedSortoption==id){
      setOption("");
      params.delete('sortBy');
      replace(`?${params}`,{scroll:false})
     }else {
      setOption(id);
       params.set('sortBy',id);
       replace(`?${params}`,{scroll:false})
    }
 }
 const resetPrice=()=>{
  if(currentSetprice==0){
  setcurrentPrice(8000)
}
 }
 const handlePrice=(id?:string)=>{
  if(presentlyCheckedPriceoption!==id){
    setPriceOption(id);
    if(id!=="morePrice"){
      params.set('Underprice',String(currentSetprice));
      params.delete('fromPrice')
      replace(`?${params}`,{scroll:false})
    }else{
      params.set('fromPrice',String(currentSetprice));
      params.delete('Underprice')
      replace(`?${params}`,{scroll:false})
    }
  }else{
    setPriceOption("");
    params.delete('Underprice');
    params.delete('fromPrice');
    replace(`?${params}`,{scroll:false})
  }
 }
const handleAvailability = ()=>{
  if(params.has('availability')){
    params.delete('availability');
    replace(`?${params}`,{scroll:false});
  }else{
 params.set('availability',"in-stock");
 replace(`?${params}`,{scroll:false})}
}
const readUrlAndSetButtonsActive = ()=>{

  const isSortByActive = params.get('sortBy');
  if(isSortByActive){
    setOption(isSortByActive)
  }
  const isunderPriceActive = params.get('Underprice');
   if(isunderPriceActive){
    setPriceOption("underPrice");
   }
   const isfromPriceActive = params.get('fromPrice');
if(isfromPriceActive){
  setPriceOption("morePrice")
}
}
useEffect(()=>{
  readUrlAndSetButtonsActive()
},[])
const animationVariants = {
  init:{
    y:500
  },
  anim:{
    y:0,
    transition:{
      duration:0.1,
    }
  },
 ex:{
  y:500,
  transition:{
    duration:0.1,
    ease:"easeInOut"
  },
 }
}
const {setFilterVisiblity,data} = useContext(globalStore);
  return (

    <ChakraProvider>
    <motion.div variants={animationVariants} exit="ex"  initial="init" animate="anim" className={` ${smallfont.className} pt-[2em] accent-black text-[1rem] lg:w-[37%] lg:border-r lg:top-0  w-full px-[1em] py-[0.75em] fixed rounded-t-[.5rem] bg-white  bottom-0 h-max z-[100000] h-[100vh]`}>
      <div className='flex  justify-between'>
        <p className={`${font.className} text-[1.25em]`}>Filters</p>
        <button onClick={()=>setFilterVisiblity(false)} type="button" className=''>&#10005;</button>
      </div>
      <div className='w-full mt-[.4em] py-[1em] border-t border-black border-b'>
        <p>Availability</p>
        <div className='flex mt-[1em] items-center gap-[0.75em]'>
          <Switch colorScheme='purple' isChecked={params.has('availability')} onChange={handleAvailability} id='email-alerts' />
          <p>In-Stock</p>
        </div>


      </div>
      <div className='w-full py-[1em]   border-black border-b'>
        <p>SortBy</p>
        <div className='flex mt-[0.6em] items-center gap-[0.75em]'>
            <input className='accent-black' onChange={()=>handleSortby("hightolow")} id="hightolow" checked={presentlyCheckedSortoption=="hightolow"}  title='price' type="checkbox"  />
          <p>Price:High to Low</p>
        </div>
        <div className='flex items-center gap-[0.75em]'>
        <input onChange={()=>handleSortby("lowtohigh")} id="lowtohigh" checked={presentlyCheckedSortoption=="lowtohigh"}  title='price' type="checkbox"  />
        <p>Price:Low to high</p>
        </div>


      </div>
      <div className='w-full py-[1em]'>
        <p>Specify Price</p>
        <div className='flex mt-[0.6em] items-center gap-[0.75em]'>
            <input onChange={()=>handlePrice("underPrice")} checked={presentlyCheckedPriceoption=="underPrice"}  title='price' type="checkbox"  />
          <p>Under &#8358;{currentSetprice}</p>
        </div>
        <div className='flex items-center gap-[0.75em]'>
        <input onChange={()=>handlePrice("morePrice")} checked={presentlyCheckedPriceoption=="morePrice"}  title='price' type="checkbox"  />
        <p>&#8358;{currentSetprice}+</p>
        </div>

     <div className='mt-[1em]'>
      <p>specify your price</p>
      <input onBlur={resetPrice} onChange={(event)=>{setcurrentPrice(Number(event.target.value));setPriceOption("");clearPricefilter()}} className='w-[9em] h-[3em] mt-[.8em] outline-none border-black border' title='price' type="text" />
     </div>
      </div>
      <button onClick={()=>setFilterVisiblity(false)} type="button" className={`${font.className} uppercase text-white w-full h-[2.875em] hover:bg-[#626262] bg-black`}>
        view {data?data.length:'loading..'} items
      </button>
    </motion.div>
    </ChakraProvider>

  )
}

export default Popupfiltercomponent
