"use client"
import React, { useContext, useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { useQuery } from '@tanstack/react-query'
import supabase from '@/public/supabase'
import globalStore from '@/app/store/globalstore'
import Product from '../Product'
const font = localFont({src:"../../fonts/KapraNeueW05-SemiBold.woff2"})
function Wishlist() {
  const {wishlist} = useContext(globalStore);
  const fetchProductsBasedOnId = async ()=>{
    const idOfwishes = wishlist.map((product:product)=>{
      return product.id;
    });
    const {data,error} = await supabase.from('jewelries').select('*').in("id",[...idOfwishes]);
   return data;

  }

const {isPending,error,data} = useQuery({
    queryKey:['wishlist'],
    queryFn:()=>fetchProductsBasedOnId()
  });
const WishesFromDB = ()=>{
  return <>
  {data?.length !=0 ? data?.map((product:product)=>{
    return <Product Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} images={product.ImagesUrl} id={product.id} Price={product.Price} Color={product.Color} Name={product.Name}/>
  }):'NOthing here'}
  </>
}
  return (
    <div className='w-full overflow-auto p-[1em] h-full'>
      <p className={`${font.className} text-[2em] font-[600]`}>WISHLIST</p>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 md:grid-rows-3 px-[1em] gap-[.7em]  grid-cols-2 grid-rows-2'>
        {isPending?'loading':<WishesFromDB/>}
      </div>
    </div>
  )
}

export default Wishlist
