import Link from 'next/link'
import React from 'react'
import Producttypefilter from './Producttypefilter'

function Shopfilters() {
  return (
    <div className='px-[.7em] overflow-hidden sm:hidden max-w-max h-max overflow-y-hidden py-[.8em]'>
    <div className='flex gap-[0.5em] overflow-hidden w-full'>
       <Producttypefilter filter={'Earrings'}/>
       <Producttypefilter filter={'Necklaces'}/>
       <Producttypefilter filter={'Rings'}/>
       <Producttypefilter filter={'Bracelets'}/>
    </div>
    </div>
  )
}

export default Shopfilters
