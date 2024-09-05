import React from 'react'
import ShopTitle from './ShopTitle'
import Shopfilters from './Shopfilters'
import Products from '../Products'
function Shop() {

  return (
    <div className='h-max'>
      <ShopTitle/>
      <Shopfilters/>
      <Products/>
      </div>
  )
}

export default Shop
