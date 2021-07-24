import React from "react";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settingsLG = { 
    arrows: true,
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: 460,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1
   };

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: 500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    "https://images.unsplash.com/photo-1626619633396-1769230c1342?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626462054828-5334570b899f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ];

  return(
    <>
      <div className="lg:hidden">
      <Slider {...settings}>
        {images.map((image) => {
        return(  <div className="w-full h-44 md:h-64 py-3">
            <img src={image} alt="testing" />
          </div>)
})}
      </Slider>
      </div>

      <div className="hidden lg:block">
      <Slider {...settingsLG}>
        {images.map((image) => {
        return(  <div className="w-full h-80 px-2">
            <img src={image} alt="testing" />
          </div>)
})}
      </Slider>
      </div>
    </>
  );
};

export default HeroCarousal;