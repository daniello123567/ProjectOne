import React from 'react'
import Image from 'next/image'
function wishlistbtn() {
  return (
    // WISH LIST BUTTON SHUD BE BESIDE THE NAME OF EACH PRODUCTS
    <div className='w-[1.5em] flex justify-center items-center rounded-full h-[1.5em]  z-[2000] absolute bottom-[7em] right-[.4em] '>
        <Image alt='wishlist.svg' className='h-[1em] w-[1em]' width={500} height={500} src="/headericons/Wishlist.svg"/>
       </div>
  )
}

export default wishlistbtn
