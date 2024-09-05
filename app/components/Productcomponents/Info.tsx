import React from 'react'
import localFont from 'next/font/local'
const smallfont = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
const font= localFont({src:"../../fonts/dd.woff2"});
type prop = {name:string,price:number,color:string}
const formatNumber = (number:number)=>{

return number.toLocaleString();
}
function Info({name,price,color}:prop) {
  return (
    <div className='w-full bg-white flex flex-col gap-[.1em] pt-[.7em] h-[40%] '>
    <p className={`${font.className} text-black font-[500] hover:text-[#626262]`}>{name}</p>
    <p className={`${smallfont.className} font-[400] text-[1rem]`}>&#8358;{formatNumber(price)}</p>
    <div className='bg-gray-500 w-[1.125em] border border-[#686868] h-[1.125em] rounded-full'></div>
    <p className={`${smallfont.className} text-[0.75em] font-[400]`}>{color}</p>
    <button className={`${font.className} lg:hidden mt-[.8em] py-[0.125em] px-[0.75em] w-full  font-[500]  tracking-[1px] text-[0.75em] rounded-full border border-[#EDEDED]`} type='button'>ADD TO BAG</button>
   </div>
  )
}

export default Info
