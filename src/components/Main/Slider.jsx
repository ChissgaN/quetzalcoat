import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderMobilUno from "../../assets/sliderMobileUno.png";
import sliderMobilDos from "../../assets/sliderMobileDos.png";
import sliderMobilTres from "../../assets/sliderMobileTres.png";
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
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint is 768px
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
    <div className="w-full mt-16 md:h-[450px] lg:h-[500px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="my-2 flex w-screen">
            <img
              src={image}
              className="max-sm:h-[290px] sm:h-[380px] w-full h-[250px] md:h-[450px] lg:h-[500px]"
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderImg;
