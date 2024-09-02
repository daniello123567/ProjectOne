import React from 'react'
import Product from './Product'
function Products() {
  return (
   <div className='grid px-[1em] gap-[0.3rem] pt-[3em] grid-cols-2 grid-rows-2'>
   <Product/>
   <Product/>
   </div>
  )
}

export default Products
