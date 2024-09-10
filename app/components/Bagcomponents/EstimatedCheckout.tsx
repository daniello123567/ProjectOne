"use client"
import React, { useContext, useEffect, useState } from 'react'
import localFont from 'next/font/local'
import globalStore from '@/app/store/globalstore'
const bold = localFont({src:"../../fonts/dd.woff2"})
const small = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
function EstimatedCheckout() {
  const [totalPrice,setTotalPrice] = useState<number>(0);
  const {Bag} = useContext(globalStore);
  const getAllTotalPrice = ()=>{
     let sumOfAllPriceTimesQuantity:number=0;
    for(let i=0;i<Bag.length;i++){
      sumOfAllPriceTimesQuantity+=Bag[i].price * Bag[i].quantity
    }
   setTotalPrice(sumOfAllPriceTimesQuantity);

  }
  useEffect(()=>{
    getAllTotalPrice()
  },[Bag])
  return (
    <div className='w-full fixed bottom-0 h-[8.875em] px-[1.5em] py-[1em] shadow-2xl border-t border-t-black bg-white'>
         <div className='flex mb-[0.5em] justify-between '>
          <p className={`${bold.className} font-[500] text-[1rem]`}>Total</p>
          <p className={`${small.className} text-[1rem] font-[400]`}>&#x20A6;{totalPrice.toLocaleString()}</p>
         </div>
         <button type='button' className={`${bold.className} active:opacity-55 tracking-[1px] text-[1rem] font-[500] w-full h-[2.875em] bg-black text-white`}>CHECKOUT</button>
    </div>
  )
}

export default EstimatedCheckout
