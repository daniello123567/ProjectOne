import React from 'react'
import localFont from 'next/font/local'
import Filterbtn from "./Filterbtn"
import Filterdrop from './Filterdrop'
const font = localFont({src:"../../fonts/dd.woff2"})
function Filters() {
  return (
    <div className='flex items-center sticky  z-[60] bg-white h-[3.9875em] shadow-sm top-[6.6em] px-[1em] gap-x-[2em] w-full'>
      <Filterbtn/>
      <Filterdrop/>
    </div>
  )
}

export default Filters
