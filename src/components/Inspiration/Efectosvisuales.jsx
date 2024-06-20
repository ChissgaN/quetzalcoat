import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CardsEfectos from "./CardsEfectos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Efectosvisuales = () => {
  const [efectosVisualesData, setEfectosVisualesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Efectos/Efectos.json")
      .then((response) => response.json())
      .then((data) => {
        setEfectosVisualesData(data.efectosVisuales);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
          <h1 className="mt-8 mb-4 flex justify-center text-center text-[#e61588] text-xl font-bold sm:text-2xl md:text-3xl">Efectos Visuales con el color en el entorno!</h1>
          <p className="flex justify-center text-center font-serif md:text-lg">La pintura en un espacio arquitectónico permite que se logren efectos visuales para dar vida a un espacio determinado, conoce más con nosotros!</p>
      <Slider {...settings}>
        {efectosVisualesData.map((efecto) => (
          <div key={efecto.id} className="p-4 ">
            <CardsEfectos
              imagen={efecto.imagen}
              nombre={efecto.nombre}
              descripcion={efecto.descripcion}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Efectosvisuales;
