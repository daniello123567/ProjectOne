import React, { memo, useContext, useMemo } from 'react'
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
created_at:string|any;
id:string|any;
Amt_in_stock:number
}
}
function Products() {
  // const {} = Data
  const {data,isPending} = useContext(globalStore);
  const Allproducts =()=>{
    return <>
    {data&&data.map((product:product)=>{
      return <Product details={product.Details} Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} id={product.id} Price={product.Price} images={product.ImagesUrl} key={product.id} Color={product.Color} Name={product.Name}/>
    })}
  </>
  }
  return (
    <div className='grid lg:gap-[1em] h-auto md:grid-cols-3 lg:grid-cols-4   px-[1em] gap-[.7em]  grid-cols-2 '>
       {
        isPending?
        <ProductSkeletons key={"90sBoyo"}/>
        :
        <Allproducts key={"ohgod"}/>
       }
       </div>
  )
}

export default Products;
export const revalidate = 5;
