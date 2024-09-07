import React from 'react'
import Image from 'next/image'
function wishlistbtn() {
  return (
    <div className='w-[1.5em] z-[2000] absolute top-[1em] right-[1em] h-[1em] '>
        <Image alt='wishlist.svg' className='w-full h-full' width={500} height={500} src="/headericons/Wishlist.svg"/>
       </div>
  )
}

export default wishlistbtn
