"use client"
import React from 'react'
import 'swiper/css'
import Imagecarousel from './Productcomponents/Imagecarousel';
import Info from './Productcomponents/Info';
import Wishlistbtn from './Productcomponents/wishlistbtn';
function Product({Name,Color,Price,images,id,Tag}:{Name:string,Color:string,Price:number,id:string,images:string[],Tag:string}){
  return (
    <div className={` relative w-full bg-[#F5F5F5] daddy:h-[32.9104375em] h-[21.8979375em]`}>
       <Imagecarousel Tag={Tag} arrayofImages={images}/>

       <Info Tag={Tag} idOfProduct={id} image={images[0]} name={Name} color={Color} price={Price}/>
       <Wishlistbtn/>
    </div>
  )
}

export default Product
