import React from 'react'
import ShopTitle from './ShopTitle'
import Shopfilters from './Shopfilters'
import Products from '../Products'
import Heromsg from '../Heromsg'
function Shop() {

  return (
    <div className='h-max'>
      {/* <ShopTitle /> */}
      <Heromsg />

      <Shopfilters />
      <Products />
    </div>
  )
}

export default Shop
