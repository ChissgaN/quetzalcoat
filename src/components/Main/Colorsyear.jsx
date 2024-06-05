import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import colorUno from "../../assets/colorUno.webp";
import colorDos from "../../assets/colorDos.webp";
import colorTres from "../../assets/colorTres.webp";

function SliderImg() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full my-16 flex flex-col md:flex-row md:justify-around items-center px-5 py-5 md:px-14 transform hover:scale-105 transition duration-300 hover:bg-[#092469] hover:text-white ">
      <div className="w-full md:w-1/2 md:h-[350px] flex flex-col items-center ">
        <Slider {...settings} className="w-full">
          <div className="my-2 flex justify-center">
            <img
              src={colorUno}
              className="w-[80%] md:w-[90%] max-w-[90%] h-auto md:h-[325px] mx-auto rounded-xl"
              alt="Color of Year"
            />
          </div>
          <div className="my-2 flex justify-center">
            <img
              src={colorDos}
              className="w-[80%] md:w-[90%] max-w-[90%] h-auto md:h-[325px] mx-auto rounded-xl"
              alt="Color of Year"
            />
          </div>
          <div className="my-2 flex justify-center">
            <img
              src={colorTres}
              className="w-[80%] md:w-[90%] max-w-[90%] h-auto md:h-[325px] mx-auto rounded-xl"
              alt="Color of Year"
            />
          </div>
        </Slider>
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0 md:mx-8 w-[80%] md:w-1/2 ">
        <h1 className="text-center text-lg font-bold font-serif mb-3 sm:text-xl lg:text-2xl">Color del Año Coral 2024</h1>
        <p className="text-center">
          El color del año 2024 simboliza una combinación de innovación y
          tradición. Es una tonalidad que evoca sentimientos de esperanza y
          renovación, reflejando tanto los avances tecnológicos como el regreso
          a valores y estilos clásicos. Este color no solo marca tendencias en
          la moda y el diseño, sino que también inspira creatividad y
          conexión en diversas áreas de la vida y puedes adquirirlo con nosotros!.
        </p>
      </div>
    </div>
  );
}

export default SliderImg;
