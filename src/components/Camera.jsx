import React from "react";
import { Carousel } from "antd";
import slide1Image from "../Images/cameraaa.jpg";
import "../components/Pagestyle.css";

const CarouselComponent = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src={slide1Image} alt="Slide 1" className="carousel-image" />
        <div className="carousel-content"></div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
