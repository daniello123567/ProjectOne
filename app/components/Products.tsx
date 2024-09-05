"use client"
import React, { useContext } from 'react'
import Product from './Product'
import globalStore from '../store/globalstore'
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
}
}
function Products() {
  const {data} = useContext(globalStore);
  console.log(data,"here in products");

  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 md:grid-rows-3 px-[1em] gap-[0.3rem] pt-[2.6em] grid-cols-2 grid-rows-2'>
      {data&&data.map((product:product)=>{
        return <Product Price={product.Price} images={product.ImagesUrl} key={product.id} Color={product.Color} Name={product.Name}/>
      })}
      {/* <Product /> */}
    </div>
  )
}

export default Products
