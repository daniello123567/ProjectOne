"use client"
import { useMediaQuery } from 'react-responsive'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import localFont from 'next/font/local'
const LogoFont = localFont({ src: "../../fonts/dw-futura-light.woff2" })
const LogoFont2 = localFont({ src: "../../fonts/dd.woff2" })
function Links({isOtherlinksVisible}:{isOtherlinksVisible:boolean|undefined}) {

  return (<>
    <div className='Links'>
          <Link href="">
           <div className='w-[ 1.125em] h-[1.125em] bg-white'>
           <Image src="/Menu.svg" width={500} height={300} alt='menu' />
           </div>
          </Link>
          <Link href="">
          <div className='w-[ 1.125em] h-[1.125em] bg-white'>
          <Image src="/Search.svg" width={500} height={300} alt='menu' />
          </div>
          </Link>
          <div className={`${LogoFont.className} logo2`}>NUBE</div>
          <Link href="">
          <div className='w-[ 1.125em] h-[1.125em] bg-white'>
          <Image src="/Wishlist.svg" width={500} height={300} alt='menu' />
          </div>
          </Link>
          <Link href="">
          <div className='w-[ 1.125em] h-[1.125em] bg-white'>
          <Image src="/Cart.svg" width={500} height={300} alt='menu' />

          </div>
          </Link>
        </div>
        <div className={`${LogoFont2.className} text-center helpful-links `}>
          <p>Jewelries</p>
          <p>shop</p>
          <p>Jewelries</p>
          <p>Jewelries</p>
        </div>
        </>
  )
}

export default Links
