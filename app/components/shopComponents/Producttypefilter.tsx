import React from 'react'
import localFont from 'next/font/local'
const myfont = localFont({src:"../../fonts/dd.woff2"})
function Producttypefilter({filter}:{filter:string}) {
  return (
    <div className='h-[9.7135625em] cursor-pointer daddy:h-[13.4104375em] daddy:w-[9.375em]  flex flex-col justify-between  w-[6.375em] '>
      <div className='img daddy:h-[11.1604375em] here h-[7.5885625em] w-full bg-red-600'></div>
      <p className={`${myfont.className} underline text-[0.875em] font-[500] w-full h-[1.375em]`}>{filter}</p>
    </div>
  )
}

export default Producttypefilter
