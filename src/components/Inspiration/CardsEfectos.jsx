import React from 'react';

const CardsEfectos = ({ imagen, nombre, descripcion }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 h-[480px] sm:h-[440px] md:h-[460px] max-w-md mx-auto my-8 ">
      <img src={imagen} alt={nombre} className="w-full h-[260px] object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-center text-[#e61588] ">
          {nombre}
        </h3>
        <p className="text-gray-700 text-center">{descripcion}</p>
      </div>
    </div>
  );
};

export default CardsEfectos;
