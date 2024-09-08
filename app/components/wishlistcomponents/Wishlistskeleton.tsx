"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function  Wishlistskeleton() {
  return <div className='grid  gap-[.7em]  grid-cols-2 grid-rows-2'>
       <Skeleton height={"16em"} inline={false} width={"100%"}/>
      <Skeleton height={"16em"} inline={false} width={"100%"}/>
       <Skeleton height={"16em"} inline={false} width={"100%"}/>
      <Skeleton height={"16em"} inline={false} width={"100%"}/>
     </div>


}

export default Wishlistskeleton
