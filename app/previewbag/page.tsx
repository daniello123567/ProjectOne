"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Page() {
  return (
     <div className='grid gap-[1.2em] p-[1em] w-full h-screen grid-rows-2 grid-cols-2'>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
     </div>

  )
}

export default Page
