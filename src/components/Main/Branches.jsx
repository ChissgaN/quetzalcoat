import { Link } from "react-router-dom";
import maps from "../../assets/maps.png"
import { FaMapMarkerAlt } from 'react-icons/fa';


const Branches = () => {
  return (
    <div className="px-3 mt-16">
      <h1 className="text-center text-xl font-serif font-bold text-[#092469]">
        ¡Tenemos una tienda cerca de ti!
      </h1>
      <h3 className="text-center text-lg font-medium ">
        Descubre nuestras ubicaciones y visita nuestras tiendas.
      </h3>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto my-12 px-8 lg:px-20 justify-items-center">
        <div className="hover:border hover:border-red-700 rounded-xl shadow-slate-500 shadow-md w-full max-w-[500px] transform hover:scale-105 transition duration-300 max-h-[450px]">
          <img className="w-full rounded-xl" src={maps} alt="maps" />
          <h2 className="text-center py-3 text-lg font-medium">La Esperanza, Quetzaltenango</h2>
          <p className="text-center">7ma. Av. 2-60 zona 1 La Esperanza, Quetzaltenango.</p>
          <Link to="https://www.google.com/maps/@14.8418888,-91.5278641,15.25z?entry=ttu">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold my-5 py-4 px-4 rounded flex mx-auto items-center">
              Visitar
            <FaMapMarkerAlt className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="hover:border hover:border-red-500 rounded-xl shadow-slate-500 shadow-md w-full max-w-[500px] transform hover:scale-105 transition duration-300 max-h-[450px]">
          <img className="w-full rounded-xl" src={maps} alt="maps" />
          <h2 className="text-center py-3 text-lg font-medium">Quetzaltenango, Quetzaltenango</h2>
          <p className="text-center">20 Av. 1-11 zona 3 Quetzaltenango, Quetzaltenango.</p>
          <Link to="">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold my-5 py-4 px-4 rounded flex mx-auto items-center">
              Visitar
            <FaMapMarkerAlt className="ml-2" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Branches;
