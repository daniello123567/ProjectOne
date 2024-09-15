"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
import NotificationMultiplier from './Notification/NotificationMultiplier'
import supabase from '@/utils/supabase'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query'

function Notification() {
 const [notification,setNotification] = useState<string>('');
 const getNotification = async ()=>{
  const {data} = await supabase.from("Notification").select().eq('id',1).single();
  if(data){
    setNotification(data.Notification)
  }
  return data;
 }
 const {isPending} = useQuery({
    queryKey:["datax"],
    queryFn:()=>getNotification()
 })

  return (
   <>
   {!isPending?<div className='bg-[#BDA37D] z-[30000000] md:py-[1em] border-t border-t-black overflow-hidden py-[0.5em] w-full'>
      <motion.div animate={{
        x:['0%',"-100%"],
        transition:{
          ease:"linear",
          duration:15,
          repeat:Infinity
        }
      }} className='flex gap-[1em] items-center'>
          <NotificationMultiplier Text={notification}/>
        </motion.div>
    </div>:<Skeleton height={"3em"}/>}</>
  )
}

export default Notification
