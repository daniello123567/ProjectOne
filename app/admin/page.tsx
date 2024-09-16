"use client"
import React from 'react'
import Products from './components/Products'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Notification from './components/Updatefooter/Notification'
import {ClerkProvider, useUser} from "@clerk/nextjs"
import { useRouter } from 'next/navigation'
function Page() {
  const querybro = new QueryClient();
  return (
    <QueryClientProvider client={querybro}>
    <Products/>
    <Notification/>
    </QueryClientProvider>
  )
}

export default Page
