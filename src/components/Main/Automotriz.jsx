import React from "react";
import rm from "../../assets/rm.png";
import limco from "../../assets/limco.webp";

const Automotriz = () => {
  return (
    <div className="bg-gray-100 mt-24 py-12 px-4 cursor-pointer">
      <h1 className="text-center text-[#e61588] text-2xl font-bold sm:text-3xl md:text-4xl mb-6">
        Soluciones Automotrices
      </h1>
      <p className="text-center text-gray-700 text-base sm:text-lg md:text-xl mb-6">
        En UniKolor, nos enorgullece ser tu socio confiable en el mundo de los
        recubrimientos automotrices desde 1976. No solo encontrarás productos
        de primera clase, sino también un equipo comprometido a proporcionarte
        soluciones personalizadas y el respaldo que necesitas para alcanzar el
        éxito en tu proyecto. Contamos con las mejores marcas para soluciones
        automotrices: RM y Limco.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-around mb-8 space-y-8 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col items-center max-w-md p-4 shadow-lg shadow-gray-500">
          <div className="w-full h-48 flex items-center justify-center transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <img
              src={rm}
              alt="RM logo"
              className="h-[90%] object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-5 text-center">
            RM© la marca de mayor renombre a nivel mundial en la industria de la
            pintura automotriz, destaca su calidad y experiencia en el
            campO automotriz marítimo y aéreo. Los
            productos RM© son preferidos por talleres de carrocería y
            profesionales del mundo automotriz.
          </p>
        </div>
        <div className="flex flex-col items-center max-w-md p-4 shadow-lg shadow-gray-500">
          <div className="w-full h-48 flex items-center justify-center transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <img
              src={limco}
              alt="Limco banner"
              className="h-full object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg my-5 text-center">
            Limco© es una respetada marca en la industria de la pintura
            industrial, conocida por su enfoque en la calidad y la durabilidad.
            Es la elección preferida de quienes buscan rendimiento de primera
            clase y un acabado duradero en cada proyecto de pintura.
          </p>
        </div>
      </div>
      <p className="text-center text-gray-700 text-base sm:text-lg md:text-xl mb-6">
        Visita nuestro apartado web de soluciones Automotrices para conocer más
        y realizar tus compras.
      </p>
      <div className="flex justify-center">
        <a
          href="https://unikolor.com/sitio-web/inicio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-[#e61588] text-white text-base sm:text-lg rounded-lg hover:bg-[#c51476] transition duration-300 ease-in-out"
        >
          Visitar UniKolor
        </a>
      </div>
    </div>
  );
};

export default Automotriz;
