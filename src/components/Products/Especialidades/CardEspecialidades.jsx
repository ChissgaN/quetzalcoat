// CardArquitectonicos.js
import React from "react";

const generateWhatsAppLink = (nombre) => {
  const phoneNumber = "50236885254";
  const message = `Hola vi el ${nombre} y quiero conocer más información para adquirirlo!`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const CardEspecialidades = ({ imagen, nombre, descripcion, precio }) => {
  return (
    <div className="flex items-center justify-center overflow-hidden border-2 border-green-500 rounded-lg hover:shadow-lg hover:shadow-green-700 py-8 px-4 max-w-[318px] sm:max-w-[444px] sm:h-[525px] md:max-w-[320px] lg:max-w-[295px] h-[475px] xl:max-w-[345px] lg:h-[320px] xl:w-[345px] xl:h-[510px] group">
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
        <img
          src={imagen}
          alt={nombre}
          className="transition-transform duration-500 w-[90%] h-[80%] sm:w-[80%] sm:h-[80%] md:w-[100%] md:h-[80%] xl:w-[90%] xl:h-[90%] object-cover group-hover:w-[60%] group-hover:h-[60%] group-hover:translate-y-[-10%] sm:group-hover:w-[60%] sm:group-hover:h-[65%] md:group-hover:w-[80%] md:group-hover:h-[75%] xl:group-hover:w-[65%] xl:group-hover:h-[85%]"
        />
        <h1 className="text-[#092469] text-2xl mt-2 font-bold">{nombre}</h1>
        <div className="hidden group-hover:block w-full mt-4 transition-opacity duration-500">
          <p className="text-black mt-2">{descripcion}</p>
          <div className="flex justify-around items-center w-full mt-4">
            <span className="text-black font-semibold">Q{precio}</span>
            <a
              href={generateWhatsAppLink(nombre)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Adquirir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEspecialidades;
