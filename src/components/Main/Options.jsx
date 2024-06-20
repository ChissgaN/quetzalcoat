
import { Link } from 'react-router-dom';
import indus from "../../assets/interiores.webp";
import arqui from "../../assets/exteriores.webp";
import otros from "../../assets/otros.webp";

const Options = () => {
  return (
    <div className="w-full my-8">
      <div className="w-full px-3" >
        <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center text-[#e61588] mb-2">
          ¡Descubre nuestras opciones!
        </h4>
        <p className="font-medium text-lg text-center sm:text-xl md:text-2xl">
          Tenemos una solución para cada necesidad ya que contamos con más de 3,000 colores.
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%] mx-auto my-8 justify-items-center">
        <Link 
          to="/productosArquitectonicos" 
          className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[300px] transform hover:scale-105 transition duration-300"
        >
          <img className="w-full max-h-[250px]" src={arqui} alt="option" />
          <h2 className="my-4 px-4 text-center text-[#092469] font-serif font-semibold">
            Soluciones arquitectónicas
          </h2>
        </Link>
        <Link 
          to="/productosIndustriales" 
          className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[300px] transform hover:scale-105 transition duration-300"
        >
          <img className="w-full max-h-[250px]" src={indus} alt="option" />
          <h2 className="my-4 text-center text-[#092469] font-serif font-semibold">
            Soluciones industriales
          </h2>
        </Link>
        <Link 
          to="/Especialidades" 
          className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[300px] transform hover:scale-105 transition duration-300"
        >
          <img className="w-full max-h-[250px]" src={otros} alt="option" />
          <h2 className="my-4 text-center text-[#092469] font-serif font-semibold">
            Especialidades
          </h2>
        </Link>
      </section>
    </div>
  );
};

export default Options;
