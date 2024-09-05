import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const myFont = localFont({src:"../../fonts/dd.woff2"})
import { useContext } from 'react'
import globalStore from '@/app/store/globalstore'
function Filterbtn({presentFilterCount}:{presentFilterCount:number}) {
  const {setFilterVisiblity} = useContext(globalStore);

  return (
    <button onClick={()=>{setFilterVisiblity(true)}} className={`${myFont.className}  flex items-center gap-x-[0.2em] underline-offset-[1.2px] text-[0.875em] text-black hover:text-[#626262] font-[500] tracking-[1px] underline`} type='button'>
      <Image src="/filter.svg" width={500} className='w-[1em] h-[1em]' height={300} alt='filter'/>
      ALL FILTERS{presentFilterCount!=0&&(`(${presentFilterCount})`)}
    </button>
  )
}

export default Filterbtn
