import React from "react";
import interiores from "../../assets/interiores.webp";
import exteriores from "../../assets/exteriores.webp";
import otros from "../../assets/otros.webp";

const Options = () => {
  return (
    <div className="w-full mt-6">
      <div className="w-full">
        <h4 className="font-bold text-xl text-center">
          ¡Descubre nuestras opciones!
        </h4>
        <p className="font-medium text-lg text-center">
          Tenemos una solución para cada necesidad.
        </p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[80%] mx-auto my-8">
        <div className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[300px] transform hover:scale-105 transition duration-300">
          <img className="w-full max-h-[250px]" src={interiores} alt="option" />
          <h2 className="my-4 px-4 text-center text-[#092469] font-serif font-semibold">Soluciones de interiores</h2>
        </div>
        <div className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[300px] transform hover:scale-105 transition duration-300">
          <img className="w-full max-h-[250px]" src={exteriores} alt="option" />
          <h2 className="my-4 text-center text-[#092469] font-serif font-semibold">Soluciones de exteriores</h2>
        </div>
        <div className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[300px] transform hover:scale-105 transition duration-300">
          <img className="w-full max-h-[250px]" src={otros} alt="option" />
          <h2 className="my-4 text-center text-[#092469] font-serif font-semibold">Otros productos</h2>
        </div>
      </section>
    </div>
  );
};

export default Options;
