"use client"
import supabase from '@/utils/supabase';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

function SingleUpimg({src}:{src:string}) {


  return (
    <div className='w-[4em] overflow-hidden rounded h-[4em] bg-blue-600'>
      <img className='w-full h-full object-cover' alt='image' src={src}/>
    </div>
  )
}

export default SingleUpimg
