"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function  Wishlistskeleton() {
  return (
     <>
    <Skeleton height={"16em"} inline={false} width={"100%"}/>
    <Skeleton height={"16em"} inline={false} width={"100%"}/>
    <Skeleton height={"16em"} inline={false} width={"100%"}/>
    <Skeleton height={"16em"} inline={false} width={"100%"}/>
     </>

  )
}

export default Wishlistskeleton
