"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Navtocat from './Navtocat'
import Notification from './Notification'
import Shop from './shopComponents/Shop'
import globalStore from '../store/globalstore'
import Popupfiltercomponent from './Popupfiltercomponent'
import { AnimatePresence } from 'framer-motion'
import supabase from '@/utils/supabase'
import { useSearchParams } from 'next/navigation'

function App() {
  const [activatedynamicheader,setactivatedynamicheader] = useState<boolean>(false)
  const [showFilter,setFilterVisiblity] = useState(false);
  const searchParam = useSearchParams();
  const params = new URLSearchParams(searchParam);
  const availabilty = params.get('availability');
  const sortBy = params.get('sortBy');
  const fromPrice = params.get('fromPrice');
  const Underprice = params.get('Underprice');
  const checkForAvailabilty = ():string=>{
    if(availabilty&&availabilty=="in-stock"){
       return "Out-of-stock"
    }else return ""
  }
  const ApplyOrderByprice=():string=>{
   if(sortBy){
    return "Price"
   }else return "created_at"
  };
  const ApplyfilterByprice = ()=>{
    if(!sortBy){
      return {ascending:false}
    }else{
      if(sortBy=="hightolow"){
        return {ascending:false}
      }else if(sortBy=="lowtohigh"){
        return {ascending:true}
      }
    }
  }
  const checkGreaterPrice=():Number=>{
    if(fromPrice){
      return Number(fromPrice)
    }else return 0
  }
  const checkLesserPrice = ()=>{
    if(Underprice){
      return Number(Underprice)
    }else return 9000000000
  }
  useEffect(()=>{
    checkLesserPrice()
    const fetchproducts = async ()=>{
      const {data,error} = await supabase.from('jewelries').select('*').neq("Tag",checkForAvailabilty()).order(ApplyOrderByprice(),ApplyfilterByprice()).gte("Price",checkGreaterPrice()).lte("Price",checkLesserPrice())
    }
    fetchproducts()
  },[availabilty,sortBy,fromPrice,Underprice])
  return (
    <globalStore.Provider value={{setactivatedynamicheader,setFilterVisiblity}} >
    <div className='appBody'>
      <Header activatedynamicheader={activatedynamicheader} />
      <Hero/>
      <Notification/>
      <Navtocat/>
      <Shop/>
      <AnimatePresence>
      {showFilter&&<Popupfiltercomponent/>}
      </AnimatePresence>
    </div>
    </globalStore.Provider>
  )
}

export default App
