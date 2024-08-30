import React from 'react'
import ShopTitle from './ShopTitle'
import Shopfilters from './Shopfilters'
import Filters from './Filter&Def'
function Shop() {

  return (
    <div className='h-[200vh]'>
      <ShopTitle/>
      <Shopfilters/>
      <Filters/>
      </div>
  )
}

export default Shop
