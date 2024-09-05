"use client"
import React from 'react'
import 'swiper/css'
import Imagecarousel from './Productcomponents/Imagecarousel';
import Info from './Productcomponents/Info';
import Wishlistbtn from './Productcomponents/wishlistbtn';
function Product({Name,Color,Price,images}:{Name:string,Color:string,Price:number,images:string[]}){
  return (
    <div className={` relative w-full bg-[#F5F5F5] daddy:h-[32.9104375em] h-[21.8979375em]`}>
       <Imagecarousel arrayofImages={images}/>
       <Info name={Name} color={Color} price={Price}/>
       <Wishlistbtn/>
    </div>
  )
}

export default Product
