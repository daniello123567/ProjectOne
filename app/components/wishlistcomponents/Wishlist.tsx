"use client"
import React, { useContext, useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { useQuery } from '@tanstack/react-query'
import supabase from '@/public/supabase'
import globalStore from '@/app/store/globalstore'
import Wishlistskeleton from './Wishlistskeleton'
import Product from '../Product'
import Empty from './Empty'
const font = localFont({ src: "../../fonts/KapraNeueW05-SemiBold.woff2" })
function Wishlist() {
  const { wishlist } = useContext(globalStore);
  const fetchProductsBasedOnId = async () => {
    const idOfwishes = wishlist.map((product:product) => {
      if (product.id)return product.id;
    });
    const { data, error } = await supabase.from('jewelries').select('*').in("id", [...idOfwishes]);
    return data;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['wishlist', wishlist],
    queryFn: () => fetchProductsBasedOnId()
  });
  const WishesFromDB = () => {
    return <>
      {data?.length != 0 ? data?.map((product:product) => {
        return <Product key={product.id} Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} images={product.ImagesUrl} id={product.id} Price={product.Price} Color={product.Color} Name={product.Name} />
      }) : <Empty/>}
    </>
  }
  return (
    <div className='w-full overflow-auto p-[1em] h-full'>
      <p className={`${font.className} text-[2em] font-[600]`}>WISHLIST</p>
      <div className='grid  gap-[.7em]  grid-cols-2 grid-rows-2'>
        {isPending ? <Wishlistskeleton/> : <WishesFromDB />}
      </div>
    </div>
  )
}

export default Wishlist
