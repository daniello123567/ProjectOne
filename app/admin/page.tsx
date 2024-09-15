"use client"
import React from 'react'
import Products from './components/Products'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Notification from './components/Updatefooter/Notification'
import {ClerkProvider, useUser} from "@clerk/nextjs"
import { useRouter } from 'next/navigation'
function page() {
  const querybro = new QueryClient();
  const {isSignedIn,isLoaded} = useUser();
  const router = useRouter()
  if(isLoaded&&!isSignedIn){
    router.push("/admin/signIn")
  }
  return (
    <QueryClientProvider client={querybro}>
    <Products/>
    <Notification/>
    </QueryClientProvider>
  )
}

export default page
