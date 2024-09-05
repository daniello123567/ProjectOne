import React from 'react'
import Image from 'next/image'
function wishlistbtn() {
  return (
    <div className='w-[1.5em] absolute top-[1em] right-[1em] h-[1em] '>
        <Image alt='wishlist.svg' className='w-full h-full' width={500} height={500} src="/headericons/Wishlist.svg"/>
       </div>
  )
}

export default wishlistbtn
