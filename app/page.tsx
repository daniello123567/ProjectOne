"use client"
import React from 'react'
import App from './components/App'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
function Page() {
 const queryClient = new QueryClient()

  return(
    <QueryClientProvider client={queryClient} >
    <App />
    </QueryClientProvider>
  )
}

export default Page
