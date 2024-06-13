import NavBar from '../../NavBar/Navbar'
import Footer from '../../Footer/Footer'
import Especialidades from './Especialidades'

const MainEspe = () => {
  return (
    <div>
        <NavBar/>
        <div className=' my-24 flex justify-center'>
        <Especialidades/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainEspe