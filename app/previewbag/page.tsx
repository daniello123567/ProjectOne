import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function page() {
  return (
    <div className='flex gap-[1em] justify-center items-center'>
     <div className='w-[12em] h-[15em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
     <div className='w-[12em] h-[15em]'>
       <Skeleton width={"100%"} height={"100%"}/>
       <Skeleton width={"50%"} height={"40px"}/>
     </div>
    </div>
  )
}

export default page
