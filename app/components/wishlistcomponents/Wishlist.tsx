"use client"
import React, { useContext, useEffect, useState } from 'react'
import localFont from 'next/font/local'
import { useQuery } from '@tanstack/react-query'
import supabase from '@/public/supabase'
import globalStore from '@/app/store/globalstore'
import Wishlistskeleton from './Wishlistskeleton'
import { Wishlist } from '@/app/store/Store'
import Product from '../Product'
import Empty from './Empty'
const font = localFont({ src: "../../fonts/KapraNeueW05-SemiBold.woff2" })
const font2 = localFont({ src: "../../fonts/smallfontforbrondon.woff2" })
function Wishlister() {
  console.log('wishlist rerenders');

  const { wishlist } = Wishlist();
  const fetchProductsBasedOnId = async () => {
    const idOfwishes = wishlist.map((product: product) => {
      if (product.id) return product.id;
    });
    const { data, error } = await supabase.from('jewelries').select('*').in("id", [...idOfwishes]);
    return data;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['wishlist', wishlist],
    queryFn: () => fetchProductsBasedOnId()
  });
  const WishesFromDB = () => {
    return <div className='grid w-full gap-[.7em] h-full  grid-cols-2 grid-rows-2'>
      {data&&data?.map((product: product) => {
        return <Product details={product.Details} key={product.id} Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} images={product.ImagesUrl} id={product.id} Price={product.Price} Color={product.Color} Name={product.Name} />
      })}
    </div>
  }
  return (
    <div className='w-full overflow-auto pb-[2em]  p-[1em] h-full'>
      <p className={`${font.className} text-[2em] font-[600]`}>WISHLIST</p>
      <div>{isPending ? <Wishlistskeleton />
        : data?.length !== 0 ?
          <><WishesFromDB />
            <p className={`${font2.className} font-[400] text-[1rem] text-center underline`}>Your Wishlist is currently {data?.length} in number. Feel free to add to bag anytime🤗</p>
          </> : <Empty />}
      </div>
    </div>
  )
}

export default Wishlister
