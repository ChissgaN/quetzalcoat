import NavBar from '../NavBar/Navbar'
import SliderImg from './Slider'
import Options from './Options'
import Footer from '../Footer/Footer'
import Branches from './Branches'
import Colorsyear from './Colorsyear'
import Proyectos from './Proyectos'
import Automotriz from './Automotriz'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <SliderImg/>
      <Options/>
      <Automotriz/>
      <Branches/>
      <Colorsyear/>
      <Proyectos/>
      <Footer/>
    </div>
  )
}

export default Main