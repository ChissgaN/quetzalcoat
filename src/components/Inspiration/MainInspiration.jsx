import React from 'react'
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import Efectosvisuales from './Efectosvisuales'
import Paletas from './Paletas'

const MainInspiration = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Efectosvisuales/>
      <Paletas/>
      <Footer/>
    </div>
  )
}

export default MainInspiration
