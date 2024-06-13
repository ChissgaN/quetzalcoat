import NavBar from '../../NavBar/Navbar'
import Footer from '../../Footer/Footer'
import Arquitectonicos from './Arquitectonicos'

const MainArqui = () => {
  return (
    <div>
        <NavBar/>
        <div className=' my-24 flex justify-center'>
        <Arquitectonicos/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainArqui