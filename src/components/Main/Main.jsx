import React from 'react'
import NavBar from '../NavBar/Navbar'
import SliderImg from './Slider'
import Options from './Options'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <SliderImg/>
      <Options/>
      <Footer/>
    </div>
  )
}

export default Main