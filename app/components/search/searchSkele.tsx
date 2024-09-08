import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SearchSkelton() {
  return (
    <div className='w-full flex flex-col gap-[.3em] h-full px-[1em]'>
      <Skeleton width={"200px"} height={"30px"}/>
      <Skeleton width={"200px"} height={"30px"}/>
      <Skeleton  height={"30px"}/>
      <Skeleton width={"200px"} height={"30px"}/>
      <div className='flex gap-[1em] flex-wrap'>
      <Skeleton  width={"10em"} height={"10em"}/>
      <Skeleton  width={"10em"} height={"10em"}/>
      <Skeleton  width={"10em"} height={"10em"}/>
      <Skeleton  width={"10em"} height={"10em"}/>
      </div>
    </div>
  )
}

export default SearchSkelton
