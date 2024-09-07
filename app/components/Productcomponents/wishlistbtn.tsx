"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import globalStore from '@/app/store/globalstore'
function Wishlistbtn() {
  const {wishlist,setWishlist} = useContext(globalStore)
  const addProductToWishlist = ({idOfProduct,name,price,color,image,Amt_in_stock}:any)=>{
     let newWish = {
      id:idOfProduct,
      name:name,
      price:price,
      color:color,
      quantity:1,
      image:image,
      Amt_in_stock:Amt_in_stock
    }
     setWishlist([...wishlist,{}])
  }
  return (
    // WISH LIST BUTTON SHUD BE BESIDE THE NAME OF EACH PRODUCTS
    <div onClick={addProductToWishlist} className='w-[1.5em] flex justify-center items-center rounded-full h-[1.5em] '>
        <Image alt='wishlist.svg' className='h-[1em] w-[1em]' width={500} height={500} src="/headericons/Wishlist.svg"/>
       </div>
  )
}

export default Wishlistbtn
