import React, { useState } from 'react';
import tendencias from "/public/imgCreaciones/tendencia.webp";
import clasicos from "/public/imgCreaciones/clasicos.webp";
import infantiles from "/public/imgCreaciones/infantiles.webp";
import greige from "/public/imgCreaciones/greige.webp";
import elegantes from "/public/imgCreaciones/elegantes.webp";
import suaves from "/public/imgCreaciones/suaves.webp";

const combinacionesData = [
  {
    id: 1,
    nombre: "Tendencias",
    imagen: tendencias,
    descripcion: "Esta convinación es perfecta ya que son colores que siempre estarán en las tendencias por su excelente sincronía.",
  },
  {
    id: 2,
    nombre: "Clásicos",
    imagen: clasicos,
    descripcion: "Si estas en busca de las convinaciones que nunca pasan de moda definitivamente esta ya que siempre estarán de moda.",
  },
  {
    id: 3,
    nombre: "Infantiles",
    imagen: infantiles,
    descripcion: "Una convinación especial para dar vida a un ambiente y sobre todo para captar la atención de los más pequeños.",
  },
  {
    id: 4,
    nombre: "Greige",
    imagen: greige,
    descripcion: "Colores monótonos que convinados hacen ver a cualquier espacio especial conservado su discreción.",
  },
  {
    id: 5,
    nombre: "Pasteles",
    imagen: suaves,
    descripcion: "Una convinación de colores en una tonalidad pastel para que un ambiente tenga una perspectiva diferente.",
  },
  {
    id: 6,
    nombre: "Elegantes",
    imagen: elegantes,
    descripcion: "Si quieres distinguir un espacio esta convinación es lo que estas buscando ya que mantener la elegancia es lo primordial.",
  },
];

const Convinaciones = () => {
  const [selectedCombinacion, setSelectedCombinacion] = useState(null);

  const handleCardClick = (combinacion) => {
    setSelectedCombinacion(combinacion);
  };

  const handleCloseModal = () => {
    setSelectedCombinacion(null);
  };

  return (
    <div>
      <h1 className="text-center mt-20 mb-12 mx-4 flex justify-center text-[#e61588] text-xl font-bold sm:text-2xl md:text-3xl">
        ¡Inspírate en estas combinaciones para darle vida a tus ambientes!
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto my-8 justify-items-center">
        {combinacionesData.map((combinacion) => (
          <div
            key={combinacion.id}
            className="relative shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 cursor-pointer"
            onClick={() => handleCardClick(combinacion)}
          >
            <img
              className="w-full h-[250px] object-cover transition-opacity duration-300 hover:opacity-75"
              src={combinacion.imagen}
              alt={combinacion.nombre}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
              <h2 className="font-serif font-semibold text-center">
                {combinacion.nombre}
              </h2>
            </div>
          </div>
        ))}
      </section>

      {selectedCombinacion && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="flex justify-center">
              <img
                className="max-h-[60vh] object-cover"
                src={selectedCombinacion.imagen}
                alt={selectedCombinacion.nombre}
              />
            </div>
            <h2 className="mt-4 text-[#092469] text-xl font-bold text-center">
              {selectedCombinacion.nombre}
            </h2>
            <p className="mt-2 text-gray-700 text-center">
              {selectedCombinacion.descripcion}
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href={`https://wa.me/50236885254?text=Vi en la pagina web la ${selectedCombinacion.nombre} y quiero más información`}
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

export default Convinaciones;
