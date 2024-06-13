import NavBar from '../../NavBar/Navbar'
import Footer from '../../Footer/Footer'
import Industriales from './Industriales'

const MainIndustri = () => {
  return (
    <div>
        <NavBar/>
        <div className=' my-24 flex justify-center'>
        <Industriales/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainIndustri