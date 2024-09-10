"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function  Wishlistskeleton() {
  return <div key={"0923"} className='grid  gap-[.7em]  grid-cols-2 grid-rows-2'>
       <Skeleton key={"0924"} height={"16em"} inline={false} width={"100%"}/>
      <Skeleton key={"0925"} height={"16em"} inline={false} width={"100%"}/>
       <Skeleton key={"0926"} height={"16em"} inline={false} width={"100%"}/>
      <Skeleton key={"0927"} height={"16em"} inline={false} width={"100%"}/>
     </div>


}

export default Wishlistskeleton
