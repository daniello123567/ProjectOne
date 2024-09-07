"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Hero from './Hero'
import Navtocat from './Navtocat'
import Notification from './Notification'
import Shop from './shopComponents/Shop'
import globalStore from '../store/globalstore'
import Popupfiltercomponent from './Popupfiltercomponent'
import { AnimatePresence } from 'framer-motion'
import supabase from '@/public/supabase'
import { useSearchParams } from 'next/navigation'
import Mobile from './Mobileheader'
import { useQuery } from '@tanstack/react-query'
import Heromsg from './Heromsg'
import BagShop from './Bag'

function App() {

  const [showFilter, setFilterVisiblity] = useState(false);
  const [showBag,setBagVisibility] = useState<boolean>(false);
  const [activePage,setactivePage] = useState<string>('');

  const [Bag,setBag] = useState<any[]>([])
  const searchParam = useSearchParams();
  const params = new URLSearchParams(searchParam);
  const availabilty = params.get('availability');
  const sortBy = params.get('sortBy');
  const fromPrice = params.get('fromPrice');
  const Underprice = params.get('Underprice');
  const ProductType = params.getAll("Product-type");
  useEffect(()=>{
    const savedBagProducts = localStorage.getItem('Bag');
    if(savedBagProducts){
     setBag(JSON.parse(savedBagProducts));
    }
   },[])

  const checkForAvailabilty = (): string => {
    if (availabilty && availabilty == "in-stock") {
      return "Out-of-stock"
    } else return ""
  }
  const ApplyOrderByprice = (): string => {
    if (sortBy) {
      return "Price"
    } else return "created_at"
  };
  const ApplyfilterByprice = () => {
    if (!sortBy) {
      return { ascending: false }
    } else {
      if (sortBy == "hightolow") {
        return { ascending: false }
      } else if (sortBy == "lowtohigh") {
        return { ascending: true }
      }
    }
  }
  const checkGreaterPrice = (): Number => {
    if (fromPrice) {
      return Number(fromPrice)
    } else return 0
  }
  const checkLesserPrice = () => {
    if (Underprice) {
      return Number(Underprice)
    } else return 9000000000
  }
  const handleProductType = ():string[]=>{
    if(ProductType.length!==0){
      return ProductType;
    }else return allDefaultProductTypes;
  }


const allDefaultProductTypes = ["Earring","Ring","Bracelet","Necklace"];
const fetchproducts = async ():Promise<any> => {
  const { data, error } = await supabase.from('jewelries').select('*').neq("Tag", checkForAvailabilty()).order(ApplyOrderByprice(), ApplyfilterByprice()).gte("Price", checkGreaterPrice()).lte("Price", checkLesserPrice()).in("Category",handleProductType())
  return data;
 }
const {isPending,error,data} = useQuery({
  queryKey:['products',availabilty,sortBy,fromPrice,Underprice,ProductType],
  queryFn:()=>fetchproducts()
});
  return (
    <globalStore.Provider value={{setFilterVisiblity,data,Bag,setBag,setBagVisibility,activePage,setactivePage }} >
      <div className='appBody'>
        <Mobile/>
        <Hero />
        <Notification/>
        <Navtocat />
        <Shop />
        <AnimatePresence>
          {showFilter && <Popupfiltercomponent />}
          {showBag && <BagShop/>}
        </AnimatePresence>
      </div>
    </globalStore.Provider>
  )
}

export default App
