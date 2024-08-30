import React from 'react'
import localFont from 'next/font/local'
import Filterbtn from "./Filterbtn"
import Filterdrop from './Filterdrop'
const font = localFont({src:"../../fonts/dd.woff2"})
function Filters() {
  return (
    <div className='flex py-[1em] sticky border border-b border-b-black top-[10.2em] px-[1em] gap-[2em] w-full'>
      <Filterbtn/>
      <Filterdrop/>
    </div>
  )
}

export default Filters
