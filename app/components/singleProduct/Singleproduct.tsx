"use client"
import React from 'react'
import 'swiper/css'
import "swiper/css/navigation"
import Image from 'next/image'
import localFont from 'next/font/local'
import Imagecarousel from './Imagecarousel'
import Nameprice from './Nameprice'
import Color from './Color'
import Details from './Accordion'
import Instock from './Instock'
import {motion} from "framer-motion"
import MyComponent from './Wishlisted'
import Wishliste from './Wishlist'
import myStore, { Wishlist } from '@/app/store/Store'
const bigFont = localFont({ src: "../../fonts/dd.woff2" });

declare global {
  type currentProduct = {
    arrayofImages:string[],Name:string,Price:number,color:string,details:string,Tag:string,id:string,Amt_in_stock:number
  }
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

function Singleproduct({arrayofImages,Name,Price,color,details,Tag,id,Amt_in_stock}:currentProduct) {
 const {wishlist,setWishlist,removeFromWish} = Wishlist();
 const {Bag,setBag,removeFromBag} = myStore();
 const isInBagalready = Bag.some((product:any)=>product.id==id)
 const isInwishlistAlready = wishlist.some((product:product)=>product.id==id);
 const addProductToWishlist = ()=>{
  if(!isInwishlistAlready){
   let newWish = {
    id:id,
    name:name,
    price:Price,
    color:color,
    quantity:1,
    image:Image,

  }
   setWishlist(newWish);
}else {
  removeFromWish(id)

}}
const addProductToBag =()=>{


  if(Tag&&Tag.toLowerCase()!=="out-of-stock"){
 if(isInBagalready){
  removeFromBag(id);

 }else{
  let newBagProduct = {
    id:id,
    name:Name,
    price:Price,
    color:color,
    quantity:1,
    image:Image,
    Amt_in_stock:Amt_in_stock
  }
   setBag(newBagProduct);

 }
}
 }
  return (
    <motion.div  variants={variants} initial="stayDown" animate="comeUp" exit="exit" className='w-full fixed top-0 z-[30000000] md:p-[1em] md:flex h-max min-h-screen  bg-white border overflow-hidden rounded-t-[1em]'>
      <Imagecarousel arrayOfImages={arrayofImages}/>
      <div className='information md:w-[50%] md:h-full p-[1em] w-full h-[45%]'>
       <Nameprice Name={Name} Price={Price}/>
        <Color color={color}/>
       <Details details={details}/>
       {Tag.toLowerCase()=="out-of-stock"?'Sold Out':<Instock/>}
        <div className={` ${bigFont.className} w-full  h-[3.625em] justify-between flex mt-[0.5em]`}>
          <button onClick={addProductToBag} type='button' className='h-full text-[0.875em] font-[500] tracking-[1px] w-[78%] bg-black text-white'>{isInBagalready?'ADDED TO BAG':'ADD TO BAG'}</button>
          <button onClick={addProductToWishlist} type='button' className='bg-black w-[20%] flex justify-center items-center  h-full '>
           {isInwishlistAlready?<MyComponent/>:<Wishliste/>}
          </button>
        </div>
      </div>
    </motion.div>
  )

}
export default Singleproduct
