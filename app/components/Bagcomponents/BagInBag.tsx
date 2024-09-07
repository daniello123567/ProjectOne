import React, { useContext } from 'react'
import Productsinbg from './Productsinbg'
import globalStore from '@/app/store/globalstore'
declare global {type BagPro = {color:string,
  id: string,
  image: string|undefined|any,
  name: string,
  price: number,
  quantity: number
}}
function BagInBag() {
  const {Bag} = useContext(globalStore);

  return (
    <div className='w-full h-full p-[1em] '>
         {Bag.length !==0 ? Bag.map((productBag:BagPro)=>{
         return <Productsinbg id={productBag.id}  price={productBag.price} Color={productBag.color} quantity={productBag.quantity} Name={productBag.name} imageThubnail={productBag.image} key={productBag.id} />
         }):"no pro yet"}
        </div>
  )
}

export default BagInBag
