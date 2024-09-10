import React from 'react'
import localFont from 'next/font/local';
const bigFont = localFont({ src: "../../fonts/dd.woff2" });

function Nameprice({Name,Price}:{Name:string,Price:number}) {
  return (
    <div className='flex w-full justify-between mb-[0.1em] items-center'>
    <p className={`${bigFont.className} text-[1.25em] font-[500]`}>{Name}</p>
    <p className={`${bigFont.className} font-[500] text-[1rem]`}>N{Price.toLocaleString()}</p>
    </div>
  )
}

export default Nameprice
