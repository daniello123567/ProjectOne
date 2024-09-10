"use client"
import React, { useCallback, useContext } from 'react'
import Image from 'next/image'
import globalStore from '@/app/store/globalstore'
import MyComponent from '../wishlistcomponents/Wishlisted'
import HeartIcon from '../wishlistcomponents/Heart'
function Wishlistbtn({idOfProduct,name,price,color,image,Amt_in_stock}:{idOfProduct:string,name:string,price:number,color:string,image:string,Amt_in_stock:number}) {
  const {wishlist,setWishlist} = useContext(globalStore)
  const isInwishlistAlready = wishlist.some((product:product)=>product.id==idOfProduct);
  const addProductToWishlist = useCallback(()=>{
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
     setWishlist([...wishlist,newWish]);
     localStorage.setItem("Wishlist",JSON.stringify([...wishlist,newWish]));
  }else {
    const updatedWishes = wishlist.filter((product:product)=>product.id !==idOfProduct);
    setWishlist([...updatedWishes]);
    localStorage.setItem("Wishlist",JSON.stringify([...updatedWishes]));

  }
  },[wishlist,setWishlist])

  return (
    // WISH LIST BUTTON SHUD BE BESIDE THE NAME OF EACH PRODUCTS
    <div onClick={addProductToWishlist} className='w-[1.5em] flex justify-center items-center rounded-full h-[1.5em] '>
        {isInwishlistAlready?
        <MyComponent/>
        :
        <HeartIcon/>
        // <Image alt='wishlist.svg' className='h-[1em] w-[1em]' width={500} height={500} src="/headericons/Wishlist.svg"/>
        }
       </div>
  )
}

export default Wishlistbtn
