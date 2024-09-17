import React from 'react'
import localFont from 'next/font/local'
const myFont = localFont({src:"../../fonts/dd.woff2"})
import { filterVisible } from '@/app/store/Store'
function Filterbtn({presentFilterCount}:{presentFilterCount?:number}) {
  const {setFilterVisiblity} = filterVisible()
   return (
    <div onClick={()=>{setFilterVisiblity(true)}} className={`${myFont.className}  flex items-center gap-x-[0.2em] w-max   underline-offset-[1.2px] text-[0.875em] text-black hover:text-[#626262] font-[500] tracking-[1px] underline`} >
      ALL FILTERS{typeof presentFilterCount!=="undefined"&&presentFilterCount!==0&&(`(${presentFilterCount})`)}
    </div>
  )
}

export default Filterbtn
