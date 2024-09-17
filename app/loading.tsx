"use client"
import React from 'react'
import Loader from './previewloader/page'
import { AnimatePresence } from 'framer-motion'

function loading() {
  return (
    <AnimatePresence>
    <Loader/>
    </AnimatePresence>
  )
}

export default loading
