import NavBar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import Especialidades from "./Especialidades";

const MainEspe = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-20 mx-2 sm:mx-4 md:mx-8 lg:mx-16">
        <h1 className="mt-8 mb-4 text-center text-[#092469] text-3xl sm:text-4xl md:text-5xl font-bold">
          Especialidades
        </h1>
        <p className="text-center font-serif font-semibold text-xl sm:text-2xl md:text-3xl text-[#e61588] mb-4">
          Contamos con más de 3,000 colores
        </p>
        <p className="text-center font-medium text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
          ¡Haz click en Asesoría y conoce nuestra gran variedad!
        </p>
      </div>

      <div className="mt-12 mb-24 flex justify-center">
        <Especialidades />
      </div>
      <Footer />
    </div>
  );
};

export default MainEspe;
