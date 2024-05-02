import React from "react";
import { Carousel } from "antd";
import img1 from "../Images/img1.jpg";
import "../components/Pagestyle.css";

const Constslider = () => {
  return (
    <Carousel autoplay>
      <div>
      <img src={img1} alt="Slide 1" className="carouselll" /> 
        <div className="carousel-content">
          {/* <h3>Slide 1</h3>
          <p>Content of slide 1</p> */}
        </div>
      </div>
      
      {/* <div>
        <img src="https://example.com/image3.jpg" alt="Slide 3" />
        <div className="carousel-content">
          <h3>Slide 3</h3>
          <p>Content of slide 3</p>
        </div>
      </div> */}
    </Carousel>
  );
};

export default Constslider;
