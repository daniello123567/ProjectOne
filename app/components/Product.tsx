"use client"
import React from 'react'
import 'swiper/css'
import Imagecarousel from './Productcomponents/Imagecarousel';
import Info from './Productcomponents/Info';
function Product({details,Amt_in_stock,Name,Color,Price,images,id,Tag}:{details:string,Name:string,Color:string,Price:number,id:string,images:string[],Tag:string,Amt_in_stock:number}){


  return (
    <div  className={`mb-[.9em] relative w-full bg-gray-200 animate-pulseGee daddy:h-[32.9104375em] h-[21.8979375em]`}>
       <Imagecarousel Tag={Tag} arrayofImages={images}/>
       <Info details={details} arrayOfImages={images} Amt_in_stock={Amt_in_stock} Tag={Tag} idOfProduct={id} image={images[0]} name={Name} color={Color} price={Price}/>
    </div>
  )
}

export default Product
