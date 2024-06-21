import React, { useState } from "react";
import invierno from "/public/imgPaletas/invierno.webp";
import hogar from "/public/imgPaletas/hogar.webp";
import pazinterior from "/public/imgPaletas/pazinterior.webp";

const paletasData = [
  {
    id: 1,
    nombre: "Paleta de invierno",
    imagen: invierno,
    descripcion: "Colores frios de la temporada que permiten que un espacio inspire la sensación unica del invierno.",
  },
  {
    id: 2,
    nombre: "Paleta perfecta para tu hogar",
    imagen: hogar,
    descripcion: "Con esta paleta tu espacio a pintar definitivamente se sentira como un hogar.",
  },
  {
    id: 3,
    nombre: "Paleta de la paz interior",
    imagen: pazinterior,
    descripcion: "Cada color en esta paleta nos transmite una sensación de tranquilidad, confianza y paz.",
  },
];

const Paletas = () => {
  const [selectedPaleta, setSelectedPaleta] = useState(null);

  const handleCardClick = (paleta) => {
    setSelectedPaleta(paleta);
  };

  const handleCloseModal = () => {
    setSelectedPaleta(null);
  };

  return (
    <div>
      <h1 className="text-center mb-4 mx-4 flex justify-center text-[#092469] text-xl font-bold sm:text-2xl md:text-3xl">
        Tenemos las paletas de colores perfectas para cada espacio!
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto my-8 justify-items-center">
        {paletasData.map((paleta) => (
          <div
            key={paleta.id}
            className="shadow-slate-500 shadow-xl hover:shadow-slate-700 hover:shadow-2xl max-w-[430px] max-h-[320px] w-[255px] transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => handleCardClick(paleta)}
          >
            <img className="w-full h-[250px] max-h-[250px]" src={paleta.imagen} alt={paleta.nombre} />
            <h2 className="my-4 px-4 text-center text-[#092469] font-serif font-semibold">
              {paleta.nombre}
            </h2>
          </div>
        ))}
      </section>

      {selectedPaleta && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseModal}>
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="flex justify-center">
              <img className="max-h-[60vh] object-contain" src={selectedPaleta.imagen} alt={selectedPaleta.nombre} />
            </div>
            <h2 className="mt-4 text-[#092469] text-xl font-bold text-center">{selectedPaleta.nombre}</h2>
            <p className="mt-2 text-gray-700 text-center">{selectedPaleta.descripcion}</p>
            <div className="mt-4 flex justify-center">
              <a
                href={`https://wa.me/50236885254?text=Vi en la pagina web la ${selectedPaleta.nombre} y quiero más información`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#e61588] text-white text-lg rounded-lg shadow-md hover:bg-[#c51476] transition duration-300 ease-in-out"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paletas;
