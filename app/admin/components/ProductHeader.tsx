import React from 'react'
import localFont from 'next/font/local'
const font = localFont({src:"../fonts/std_book.woff2"})

function ProductHeader() {
  return (
    <div className={`${font.className} h-[4.375em] text-[0.9375em] px-[1em]  border-b flex items-center`}>
      <p>Products</p>
      {/* <div className='bg-[#1321441A] h-[1.95833125em] flex justify-center items-center rounded-[.5em] ml-[.7em] w-max px-[0.5em]'>20,000</div> */}
    </div>
  )
}

export default ProductHeader
