"use client"
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
const myFont = localFont({src:"../../fonts/dd.woff2"});
function NotificationMultiplier({Text}:{Text:string}) {
  const multiplier = ():number[] =>{
    let arr:number[] = []
    for(let i = 0;i<30;i++){
           arr.push(i)
    };
    return arr;
  }
  return (<>{multiplier().map((_,I)=>{
    return (<div key={`ID-FOR-NOTIFICATION${I}`} className='flex items-center gap-[.3em]'>
      <Image src="/smallbox.svg" className='w-[1em] h-[1em]' width={500} alt='notification' height={300}/>
        <p className={`${myFont.className} md:text-[0.875em] text-[0.75em] font-[500] tracking-[1px] whitespace-nowrap`}>{Text}</p>
    </div>)
  })}

    </>
  )
}

export default NotificationMultiplier
