import React from 'react'
import localFont from 'next/font/local'
const font= localFont({src:"../fonts/dd.woff2"});
const smallfont = localFont({src:"../fonts/smallfontforbrondon.woff2"})
function Product() {
  return (
    <div className={` w-full bg-[#F5F5F5] h-[21.8979375em]`}>
       <div className='w-full h-[60%] '></div>
       <div className='w-full bg-white flex flex-col gap-[.1em] pt-[.7em] h-[40%] '>
        <p className={`${font.className} text-black font-[500] hover:text-[#626262]`}>Infinity Pendant</p>
        <p className={`${smallfont.className} font-[400] text-[1em]`}>&#8358;20,000</p>
        <div className='bg-gray-500 w-[1.125em] border border-[#686868] h-[1.125em] rounded-full'></div>
        <p className={`${smallfont.className} text-[0.75em] font-[400]`}>Gold</p>
        <button className={`${font.className} mt-[.8em] py-[0.125em] px-[0.75em] w-full h-[1.5em] font-[500] flex justify-center items-center tracking-[1px] text-[0.75em] rounded-full border border-[#EDEDED]`} type='button'>ADD TO BAG</button>
       </div>
    </div>
  )
}

export default Product
