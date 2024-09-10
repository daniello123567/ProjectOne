"use client"
import React, { useCallback, useContext } from 'react'
import globalStore from '@/app/store/globalstore'
import MyComponent from '../wishlistcomponents/Wishlisted'
import HeartIcon from '../wishlistcomponents/Heart'
function Wishlistbtn({idOfProduct,name,price,color,image,Amt_in_stock}:{idOfProduct:string,name:string,price:number,color:string,image:string,Amt_in_stock:number}) {
  const {wishlist,setWishlist} = useContext(globalStore)
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
     setWishlist([...wishlist,newWish]);
     localStorage.setItem("Wishlist",JSON.stringify([...wishlist,newWish]));
  }else {
    const updatedWishes = wishlist.filter((product:product)=>product.id !==idOfProduct);
    setWishlist([...updatedWishes]);
    localStorage.setItem("Wishlist",JSON.stringify([...updatedWishes]));

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
