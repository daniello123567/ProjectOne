"use client"
import React, { useContext } from 'react'
import Product from './Product'
import globalStore from '../store/globalstore'
import ProductSkeletons from './shopComponents/ProductsLoad'
declare global {
  type product = {
Category:string;
Color:string;
Details:string;
ImagesUrl:string[],
Name:string;
Price:number;
Tag:string;
created_at:string;
id:string;
Amt_in_stock:number
}
}
function Products() {
  const {data,isPending} = useContext(globalStore);
  const Allproducts = ()=>{
    return <>
    {data&&data.map((product:product)=>{
      return <Product Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} id={product.id} Price={product.Price} images={product.ImagesUrl} key={product.id} Color={product.Color} Name={product.Name}/>
    })}
  </>
  }
  return (
    <div className='grid lg:gap-[1em] h-full md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 md:grid-rows-3 px-[1em] gap-[.7em]  grid-cols-2 grid-rows-2'>

       {
        isPending?<ProductSkeletons/>:
        <Allproducts/>
       }
       </div>
  )
}

export default Products
