"use client"
import Image from 'next/image'
import React, {  useState } from 'react'
import localFont from 'next/font/local'
import { useQuery } from '@tanstack/react-query'
import supabase from '@/utils/supabase'
import Product from '../Product'
import { motion } from "framer-motion"
import Suggest from './Suggest'
import SearchSkelton from './searchSkele'
import { SearchVisibility } from '@/app/store/Store'
const font = localFont({ src: "../../fonts/smallfontforbrondon.woff2" });
function SearchComponent() {
  const [searchQuery, setsearchQuery] = useState<string>('');
  const fetchResults = async () => {
    const { data, error } = await supabase.from('jewelries').select().or(`Name.ilike.%${searchQuery}%,Color.ilike.%${searchQuery}%,Details.ilike.%${searchQuery}%`);
    return data;
  }
  const { isPending, error, data } = useQuery({
    queryKey: ["searchResults", searchQuery],
    queryFn: () => fetchResults()
  })
  const setSearch = (text: string) => {
    setsearchQuery(text)
  }
  const SearchResults = () => {
    return <div className='grid gap-[1em] grid-cols-2 grid-rows-2'>
      {data?.length != 0 ? data?.map((product: product) => {
        return <Product details={product.Details} Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} id={product.id} Price={product.Price} images={product.ImagesUrl} key={product.id} Color={product.Color} Name={product.Name} />
      }) : <Suggest showError={true} query={searchQuery} />}
    </div>
  }
  const variants = {
    stayDown: {
      y: 2000
    },
    comeUp: {
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeIn"
      }
    },
    exit: {
      y: 1000,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  }
  const {hideSearch} = SearchVisibility()
   return (
    <motion.div variants={variants} initial="stayDown" animate="comeUp" exit="exit" className='fixed w-full z-[200000] top-0'>
      <div className='w-full px-[1em] relative pt-[3em] lg:w-[45%] border h-screen bg-white rounded-t-[1em]'>
        <Image onClick={hideSearch} className='w-[1.7em] absolute right-[1em] top-[1em] h-[1.7em]' src="/Cancel.svg" alt='cancel' width={500} height={500} />
        <div className='w-full border-b border-b-black mb-[1em] relative h-[2.5625em]'>
          <input onChange={(e) => setSearch(e.target.value)} placeholder='Search for any product and or color' className={`h-full font-[400] text-[1rem] placeholder:text-[#757575] ${font.className} px-[2em] outline-none w-full`} title='searchquery' type='text' />
          <Image alt='search' className='w-[1.2em] absolute top-[.6em] h-[1.2em]' width={500} height={500} src="Search.svg" />
        </div>
        {!searchQuery ? <Suggest showError={false} /> : isPending ? <SearchSkelton /> : <SearchResults />}
      </div>
    </motion.div>
  )
}

export default SearchComponent
