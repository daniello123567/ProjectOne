"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ProductSkeletons() {
  return (
    <>
     <div key={"1"} className='w-full mb-[2.5em] daddy:h-[20em] h-[13em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
     <div key={"2"} className='w-full mb-[2.5em] daddy:h-[20em] h-[13em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
     <div key={"3"} className='w-full mb-[2.5em] daddy:h-[20em] h-[13em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
     <div key={"4"} className='w-full mb-[2.5em] daddy:h-[20em] h-[13em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
     <div key={"5"} className='w-full hidden md:block mb-[2.5em] daddy:h-[20em] h-[13em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
     <div key={"6"} className='w-full hidden md:block mb-[2.5em] daddy:h-[20em] h-[13em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
    </>
  )
}

export default ProductSkeletons
