import React from 'react'
import Image from 'next/image'
function wishlistbtn() {
  return (
    <div className='w-[2em] flex justify-center items-center rounded-full h-[2em] bg-white z-[2000] absolute top-[.4em] right-[.4em] '>
        <Image alt='wishlist.svg' className='h-[1em] w-[1em] ' width={500} height={500} src="/headericons/Wishlist.svg"/>
       </div>
  )
}

export default wishlistbtn
