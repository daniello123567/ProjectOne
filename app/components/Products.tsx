import React from 'react'
import Product from './Product'
import supabase from '@/utils/supabase'
function Products() {
  return (
   <div className='grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 md:grid-rows-3 px-[1em] gap-[0.3rem] pt-[3em] grid-cols-2 grid-rows-2'>
   <Product/>
   </div>
  )
}

export default Products
