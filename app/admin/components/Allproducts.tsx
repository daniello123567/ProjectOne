"use client"
import React, { useEffect, useState } from 'react'
import supabase from '@/utils/supabase'
import Single from './Single'
import { useQuery } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import localFont from 'next/font/local'
import { useSearchParams } from 'next/navigation'
import SkeletonSearch from './Skeleton'
const font = localFont({src:"../fonts/std_bold.woff2"})
function Allproducts() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query")||''

  const Fetchall = async ()=>{
    const {data,error} = await supabase.from('jewelries').select('*').or(`Name.ilike.%${searchQuery}%,Color.ilike.%${searchQuery}%,Details.ilike.%${searchQuery}%`);
    return data;
  }
  const {isPending,data} = useQuery({
    queryKey:["products",searchQuery],
    queryFn:()=>Fetchall(),
    staleTime:1
  });

  const Products = ()=>{
    return<>{data?.map((product:product)=>{return  <Single id={product.id} Type={product.Category} Tag={product.Tag} imageSrcsingle={product.ImagesUrl[0]} Price={product.Price} Name={product.Name} key={product.id}/>})}
</>
  }
  return (
    <ChakraProvider>
    <table className='w-[95%] px-[1em] mx-auto mt-[1em] border h-full'>
      <thead className={`${font.className} border-b h-[3em] items-center text-left text-[0.75em] text-black bg-[#F3F3F3] justify-between`}>
        <tr>
        <td>PRODUCTS</td>
        <td>TYPE</td>
        <td>IN-STOCK</td>
        <td>PRICE</td>
        </tr>
      </thead>

        {!isPending&&<tbody><Products/></tbody>}

    </table>
    {isPending&&<SkeletonSearch/>}
    </ChakraProvider>
  )
}

export default Allproducts
