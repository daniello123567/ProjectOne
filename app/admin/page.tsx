"use client"
import React from 'react'
import Products from './components/Products'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
function page() {
  const querybro = new QueryClient()
  return (
    <QueryClientProvider client={querybro}>
    <Products/>
    </QueryClientProvider>
  )
}

export default page
