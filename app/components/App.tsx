"use client"
import React, { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Navtocat from '../../Navtocat'
import Notification from './Notification'
import Shop from './shopComponents/Shop'
import globalStore from '../store/globalstore'
function App() {
  const [activatedynamicheader,setactivatedynamicheader] = useState<boolean>(false)
  return (
    <globalStore.Provider value={{setactivatedynamicheader}} >
    <div className='appBody mb-[50em]'>
      <Header activatedynamicheader={activatedynamicheader} />
      <Hero/>
      <Notification/>
      <Navtocat/>
      <Shop/>
    </div>
    </globalStore.Provider>
  )
}

export default App
