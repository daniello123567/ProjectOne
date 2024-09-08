"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Page() {
  return (
    <div className='grid md:grid-cols-3 gap-[1em] h-screen lg:grid-cols-4 lg:grid-rows-4 md:grid-rows-3  grid-cols-2 grid-rows-2'>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
    <Skeleton height={"100%"} inline={false} width={"100%"}/>
     </div>

  )
}

export default Page
