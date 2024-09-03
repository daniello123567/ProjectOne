"use client"
import React, { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Navtocat from './Navtocat'
import Notification from './Notification'
import Shop from './shopComponents/Shop'
import globalStore from '../store/globalstore'
import Popupfiltercomponent from './Popupfiltercomponent'
import { AnimatePresence } from 'framer-motion'
function App() {
  const [activatedynamicheader,setactivatedynamicheader] = useState<boolean>(false)
  const [showFilter,setFilterVisiblity] = useState(false);
  return (
    <globalStore.Provider value={{setactivatedynamicheader,setFilterVisiblity}} >
    <div className='appBody'>
      <Header activatedynamicheader={activatedynamicheader} />
      <Hero/>
      <Notification/>
      <Navtocat/>
      <Shop/>
      <AnimatePresence>
      {showFilter&&<Popupfiltercomponent/>}
      </AnimatePresence>
    </div>
    </globalStore.Provider>
  )
}

export default App
