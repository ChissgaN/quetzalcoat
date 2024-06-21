import React from 'react'
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import Efectosvisuales from './Efectosvisuales'
import Paletas from './Paletas'
import Convinaciones from './Convinaciones'

const MainInspiration = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Efectosvisuales/>
      <Paletas/>
      <Convinaciones/>
      <Footer/>
    </div>
  )
}

export default MainInspiration
