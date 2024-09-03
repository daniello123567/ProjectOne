"use client"
import React, { useContext } from 'react'
import ShopTitle from './ShopTitle'
import Shopfilters from './Shopfilters'
import Filters from './Filter&Def'
import { useInView } from 'react-intersection-observer'
import globalStore from '@/app/store/globalstore'
import Products from '../Products'
import Popupfiltercomponent from '../Popupfiltercomponent'
function Shop() {
  const {setactivatedynamicheader} = useContext(globalStore)
  const {ref,inView} = useInView({
    rootMargin:'0px 0px -500px 0px'
    });
 if(inView){
  setactivatedynamicheader(true)
 }else{
  setactivatedynamicheader(false)
 }
  return (
    <div ref={ref} className='h-max'>
      <ShopTitle/>
      <Shopfilters/>
      <Filters/>
      <Products/>
      </div>
  )
}

export default Shop
