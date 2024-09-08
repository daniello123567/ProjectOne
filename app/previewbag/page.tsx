import Image from 'next/image'
import React from 'react'

function page() {

  return (
    <div className='w-full px-[1em] relative pt-[3em] border h-screen bg-white rounded-t-[1em]'>
     <Image className='w-[1.7em] absolute right-[1em] top-[1em] h-[1.7em]' src="/Cancel.svg" alt='cancel' width={500} height={500}/>

     <div className='w-full relative h-[2.5625em]'>
      <input placeholder='Search for any products' className={`h-full placeholder: px-[2em] border-b border-b-black outline-none w-full`} title='searchquery' type='text'/>
      <Image alt='search' className='w-[1.2em] absolute top-[.6em] h-[1.2em]' width={500} height={500} src="Search.svg"/>
     </div>
    </div>
  )
}

export default page
