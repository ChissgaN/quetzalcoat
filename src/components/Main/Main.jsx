import React from 'react'
import NavBar from '../NavBar/Navbar'
import SliderImg from './Slider'
import Options from './Options'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <SliderImg/>
      <Options/>
    </div>
  )
}

export default Main