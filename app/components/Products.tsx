import React from 'react'
import Product from './Product'
import ProductSkeletons from './shopComponents/ProductsLoad'
import { ProductsTate } from '../store/Store'
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
  const {ProductsArr,isPendingg} = ProductsTate();
  const Noresult = ()=>{
    return <p className={`text-center  h-[6em]`}>No Products that matches your query</p>
  }
  const Allproducts =()=>{
    return <>
    {!isPendingg&&ProductsArr.length!==0&&ProductsArr.map((product:product)=>{
      return <Product details={product.Details} Amt_in_stock={product.Amt_in_stock} Tag={product.Tag} id={product.id} Price={product.Price} images={product.ImagesUrl} key={product.id} Color={product.Color} Name={product.Name}/>
    })}
  </>
  }
  return (
    <>
    <div className='grid lg:gap-[1em] h-auto md:grid-cols-3 lg:grid-cols-4   px-[.5em] gap-[.7em]  grid-cols-2 '>
       {
        isPendingg?
        <ProductSkeletons key={"90sBoyo"}/>
        :
        <Allproducts key={"ohgod"}/>
       }
       </div>
       {!isPendingg&&ProductsArr.length==0&&<Noresult/>}

       </>
  )
}

export default Products;
export const revalidate = 5;
