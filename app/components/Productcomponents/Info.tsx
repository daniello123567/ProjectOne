"use client"
import React, { useContext, useEffect} from 'react'
import { useStore } from 'zustand';
import localFont from 'next/font/local'
import globalStore from '@/app/store/globalstore';
import myStore from '@/app/store/Store';
import Wishlistbtn from './wishlistbtn';
import Gold from '../colors/Gold';
import Silver from '../colors/Silver';
const smallfont = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
const font= localFont({src:"../../fonts/dd.woff2"});
type prop = {details:string,arrayOfImages:string[],Amt_in_stock:number,name:string,price:number,color:string,image:string,idOfProduct:string,Tag:string}
const formatNumber = (number:number)=>{

return number.toLocaleString();
}

function Info({details,arrayOfImages,name,price,color,image,idOfProduct,Tag,Amt_in_stock}:prop) {
   const {Bag,setBag,removeFromBag} = myStore();
   const {setSingleproductvisibilty,setcurrentProduct} = useContext(globalStore)
   const showMoreInfo = ()=>{
     setcurrentProduct({
       arrayofImages:arrayOfImages,
       Name:name,
       color:color,
       Price:price,
       details:details,
       Tag:Tag,
       id:idOfProduct,
       Amt_in_stock:Amt_in_stock
     });
       setSingleproductvisibilty(true);

   }

  const ColorChooser = (color:string)=>{
    const Colore = color.toLowerCase()
    if(Colore=="gold"){
      return <Gold/>
    }
    else if(Colore=="silver"){
      return <Silver/>
    }
  }
  const checkIfProductisInBagAlready= ()=>{
  const response = Bag.some((product:BagProduct)=>{
    return product.id == idOfProduct
  });
  return response;

  }


  const addProductToBag =()=>{


    if(Tag&&Tag.toLowerCase()!=="out-of-stock"){
   if(checkIfProductisInBagAlready()){
    removeFromBag(idOfProduct);

   }else{
    let newBagProduct = {
      id:idOfProduct,
      name:name,
      price:price,
      color:color,
      quantity:1,
      image:image,
      Amt_in_stock:Amt_in_stock
    }
     setBag(newBagProduct);

   }
  }
   }



  return (
    <div className='w-full bg-white flex flex-col gap-[.1em] pt-[.7em] h-[40%] '>
    <div className='w-full flex pr-[.5em] justify-between'>
      <p onClick={showMoreInfo} className={`${font.className} text-black font-[500] hover:text-[#626262]`}>{name}</p>
      <Wishlistbtn idOfProduct={idOfProduct} image={image} Amt_in_stock={Amt_in_stock} name={name} color={color} price={price}/>
    </div>
    <p className={`${smallfont.className} font-[400] text-[1rem]`}>&#8358;{formatNumber(price)}</p>
     <div className='w-[1.25em] h-[1.25em] border border-black rounded-full flex justify-center items-center'>{ColorChooser(color)}</div>
    <p className={`${smallfont.className} text-[0.75em] font-[400]`}>{color}</p>
    <button onClick={()=>addProductToBag()} className={`${font.className} ${Tag.toLowerCase()=="out-of-stock" && "opacity-50"}  mt-[.5em] py-[0.35em] px-[0.75em] w-full  font-[500]  tracking-[1px] text-[0.75em] rounded-full border border-[#EDEDED]`} type='button'>{checkIfProductisInBagAlready()?'ADDED TO BAG':'ADD TO BAG'}</button>
   </div>
  )
}

export default Info
