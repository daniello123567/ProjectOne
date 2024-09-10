"use client"
import React, { useContext } from 'react'
import Productsinbg from './Productsinbg'
import globalStore from '@/app/store/globalstore'
import EstimatedCheckout from './EstimatedCheckout'
import Emptybg from './Emptybg'
import Littlemsg from './Littlemsg'
declare global {
  type BagPro = {
    color: string,
    id: string,
    image: string | undefined | any,
    name: string,
    price: number,
    quantity: number
    Amt_in_stock: number
  }
}
function BagInBag() {
  const { Bag } = useContext(globalStore);
  return (
    <div className='w-full lg:border lg:border-r overflow-auto pb-[10em] relative h-full'>
      <Littlemsg />
      {Bag.length !== 0 ? <div className='w-full lg:grid lg:grid-rows-3 lg:grid-cols-3 gap-[1em] h-max relative '>{Bag.map((productBag: BagPro) => {
        return <Productsinbg Amt_in_Bag={productBag.Amt_in_stock} id={productBag.id} price={productBag.price} Color={productBag.color} quantity={productBag.quantity} Name={productBag.name} imageThubnail={productBag.image} key={productBag.id} />
      })}</div> : <Emptybg />}
      {Bag.length !== 0 && <EstimatedCheckout />}
    </div>
  )
}

export default BagInBag
