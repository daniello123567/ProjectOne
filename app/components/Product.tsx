"use client"
import React from 'react'
import 'swiper/css'
import Imagecarousel from './Productcomponents/Imagecarousel';
import Info from './Productcomponents/Info';
const images = ["https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/ALLTHEEr.png","https://oeufvbafcncoumnudrbr.supabase.co/storage/v1/object/public/images/ALLTHEEr.png"]
function Product(){
  return (
    <div className={` w-full bg-[#F5F5F5] daddy:h-[32.9104375em] h-[21.8979375em]`}>
       <Imagecarousel arrayofImages={images}/>
       <Info name='Earring' color='silver' price='30,000'/>
    </div>
  )
}

export default Product
