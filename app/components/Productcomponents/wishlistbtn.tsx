"use client"
import React, { useCallback, useContext } from 'react'
import globalStore from '@/app/store/globalstore'
import MyComponent from '../wishlistcomponents/Wishlisted'
import HeartIcon from '../wishlistcomponents/Heart'
import { Wishlist } from '@/app/store/Store'
function Wishlistbtn({idOfProduct,name,price,color,image,Amt_in_stock}:{idOfProduct:string,name:string,price:number,color:string,image:string,Amt_in_stock:number}) {
  const {wishlist,setWishlist,removeFromWish} = Wishlist();
  console.log(wishlist);

  const isInwishlistAlready = wishlist.some((product:product)=>product.id==idOfProduct);
  const addProductToWishlist = ()=>{
    if(!isInwishlistAlready){
     let newWish = {
      id:idOfProduct,
      name:name,
      price:price,
      color:color,
      quantity:1,
      image:image,
      Amt_in_stock:Amt_in_stock
    }
     setWishlist(newWish);
  }else {
    removeFromWish(idOfProduct)

  }
  }

  return (
    <div onClick={addProductToWishlist} className='w-[1.5em] flex justify-center items-center rounded-full h-[1.5em] '>
        {isInwishlistAlready?
        <MyComponent/>
        :
        <HeartIcon/>
        }
       </div>
  )
}

export default Wishlistbtn
