import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Navtocat from './Navtocat'
import Notification from './Notification'
import Shop from './shopComponents/Shop'
function App() {
  return (
    <div className='appBody mb-[50em]'>
      <Header/>
      <Hero/>
      <Notification/>
      <Navtocat/>
      <Shop/>
    </div>
  )
}

export default App
