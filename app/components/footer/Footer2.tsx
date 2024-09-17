import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
const font = localFont({src:"../../fonts/smallfontforbrondon.woff2"})
function Footer2() {
  return (
    <div className='w-full flex p-[1em] md:justify-center md:items-center md:gap-[1em] justify-between bg-[#ece9e0] border-t border-t-black'>
      <div className={`${font.className} md:flex-row items-center md:flex md:w-max gap-[0.8em] h-[3.75em] text-[0.75em] font-[400] w-[6.8820625em]`}>
           <p>Current currency</p>
           <Image className='w-[1.5em] h-[1.5em]' src="/nigerianflag.svg" width={500} height={500} alt='nigerian flag'/>
           <p>NGN</p>
      </div>
      <div className='flex fixed bottom-4 right-4 z-[3000000] gap-[0.5em]'>
        <Link rel="noopener noreferrer" href="https://www.instagram.com/nube_jewelry/" target='_blank' className='w-[2em] flex justify-center items-center rounded-full bg-[#ece9e0] h-[2em]'>
        <Image className='w-[1.4em] h-[1.4em]' src="/instagram.svg" width={500} height={500} alt='nigerian flag'/>

        </Link>
        <a rel="noopener noreferrer" href='mailto:helloebun@gmail.com' target='_blank' className='w-[2em] flex justify-center items-center rounded-full bg-[#ece9e0] h-[2em]'>
        <Image className='w-[1.54em] h-[1.54em]' src="/mail.svg" width={500} height={500} alt='nigerian flag'/>

        </a>
      </div>
    </div>
  )
}

export default Footer2
