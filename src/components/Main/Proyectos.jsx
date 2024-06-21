import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Proyectos = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 cursor-pointer">
      <h1 className="text-center text-[#e61588] text-2xl font-bold sm:text-3xl md:text-4xl mb-8">
        ¡Realiza tu Cotización para Proyectos Especiales!
      </h1>
      <p className="text-center text-gray-700 text-base sm:text-lg md:text-xl mb-6">
        Ofrecemos precios y promociones especiales para proyectos arquitectónicos e industriales:
      </p>
      <ul className="flex flex-wrap justify-center text-center text-gray-700 text-base sm:text-lg md:text-xl mb-6 list-inside list-none">
        <li className="hover:text-[#092469] px-2">Escuelas</li>
        <li className="hover:text-[#092469] px-2">Hospitales</li>
        <li className="hover:text-[#092469] px-2">Hoteles</li>
        <li className="hover:text-[#092469] px-2">Maquinaria Industrial</li>
        <li className="hover:text-[#092469] px-2">Oficinas Corporativas</li>
        <li className="hover:text-[#092469] px-2">Centros Comerciales</li>
        <li className="hover:text-[#092469] px-2">Fábricas</li>
        <li className="hover:text-[#092469] px-2">Y muchos más...</li>
      </ul>
      <p className="text-center text-gray-700 text-base sm:text-lg md:text-xl mb-6">
        Contáctanos para obtener más información y cotizaciones personalizadas.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="mailto:unikolorxela@gmail.com"
          className="flex items-center justify-center px-6 py-3 bg-[#e61588] text-white text-base sm:text-lg rounded-lg shadow-md hover:bg-[#c51476] transition duration-300 ease-in-out"
        >
          <FaEnvelope className="mr-2" />
          Enviar Correo
        </a>
        <a
          href="https://wa.me/50236885254?text=Quiero%20consultar%20los%20precios%20y%20ofertas%20especiales%20de%20las%20soluciones%20para%20proyectos."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-6 py-3 bg-[#25D366] text-white text-base sm:text-lg rounded-lg shadow-md hover:bg-[#20c054] transition duration-300 ease-in-out"
        >
          <FaWhatsapp className="mr-2" />
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Proyectos;
