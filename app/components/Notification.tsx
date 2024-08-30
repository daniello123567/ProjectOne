"use client"
import React from 'react'
import {motion} from "framer-motion"
import NotificationMultiplier from './Notification/NotificationMultiplier'

function Notification() {
  return (
    <div className='bg-[#BDA37D] md:py-[1em] border-t border-t-black overflow-hidden py-[0.5em] w-full'>
      <motion.div animate={{
        x:['-100%',"0%"],
        transition:{
          ease:"linear",
          duration:15,
          repeat:Infinity
        }
      }} className='flex gap-[1em] items-center'>
          <NotificationMultiplier Text='Enjoy free delivery on all Nubé orders up to ₦60,000. Offer valid for Lagos deliveries only.'/>
        </motion.div>
    </div>
  )
}

export default Notification
