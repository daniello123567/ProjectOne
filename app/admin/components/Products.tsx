import React from 'react'
import ProductHeader from './ProductHeader'
import Searchproducts from './Searchproducts'
import Allproducts from './Allproducts'

function Products() {
  return (
    <div className='w-full  h-full'>
   <ProductHeader/>
   <Searchproducts/>
   <Allproducts/>
       </div>
  )
}

export default Products
