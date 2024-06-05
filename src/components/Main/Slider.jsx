import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderMobilUno from "../../assets/sliderMobileUno.png";
import sliderMobilDos from "../../assets/sliderMobileDos.png";
import sliderMobilTres from "../../assets/sliderMobileTres.webp";
import sliderUno from "../../assets/sliderUno.png";
import sliderDos from "../../assets/sliderDos.png";
import sliderTres from "../../assets/sliderTres.png";

function SliderImg() {
  const [images, setImages] = useState([
    sliderMobilUno,
    sliderMobilDos,
    sliderMobilTres,
  ]);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth >= 768) {
        setImages([sliderUno, sliderDos, sliderTres]);
      } else {
        setImages([sliderMobilUno, sliderMobilDos, sliderMobilTres]);
      }
    };

    updateImages();

    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full mt-16 max-sm:h-[450px] sm:h-[550px] md:h-[450px] lg:h-[500px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="my-2 flex w-screen">
            <img
              src={image}
              className="max-sm:h-[400px] sm:h-[500px] w-full h-[250px] md:h-[400px] lg:h-[450px]"
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderImg;
