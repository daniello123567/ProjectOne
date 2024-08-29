import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Navtocat from './Navtocat'
import Notification from './Notification'
function App() {
  return (
    <div className='appBody'>
      <Header/>
      <Hero/>
      <Notification/>
      <Navtocat/>
    </div>
  )
}

export default App
