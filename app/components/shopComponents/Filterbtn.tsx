import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const myFont = localFont({src:"../../fonts/dd.woff2"})
import { useContext } from 'react'
import globalStore from '@/app/store/globalstore'
function Filterbtn({presentFilterCount}:{presentFilterCount?:number}) {
  const {setFilterVisiblity} = useContext(globalStore);

  return (
    <div onClick={()=>{setFilterVisiblity(true)}} className={`${myFont.className}  flex items-center gap-x-[0.2em] w-max   underline-offset-[1.2px] text-[0.875em] text-black hover:text-[#626262] font-[500] tracking-[1px] underline`} >
      {/* <Image src="/filter.svg" width={500} className='w-[1em]  h-[1em]' height={300} alt='filter'/> */}
      ALL FILTERS{typeof presentFilterCount!=="undefined"&&presentFilterCount!==0&&(`(${presentFilterCount})`)}
    </div>
  )
}

export default Filterbtn
