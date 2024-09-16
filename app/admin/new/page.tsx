"use client"
import React from 'react'
import localFont from 'next/font/local'
import Header from '../components/newproductcomponents/Header'
import Inputs from '../components/newproductcomponents/inputs'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
const font = localFont({src:"../fonts/std_book.woff2"})

function Page() {
 
  return (
    <div className={`${font.className} pt-[5em]`}>
      <Header/>
      <Inputs/>
    </div>
  )
}

export default Page
