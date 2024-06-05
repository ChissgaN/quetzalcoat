import NavBar from '../NavBar/Navbar'
import SliderImg from './Slider'
import Options from './Options'
import Footer from '../Footer/Footer'
import Branches from './Branches'
import Colorsyear from './Colorsyear'

const Main = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <SliderImg/>
      <Options/>
      <Branches/>
      <Colorsyear/>
      <Footer/>
    </div>
  )
}

export default Main