import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import off1 from "../../Images/Off1.png";
import off2 from "../../Images/off2.png";
import off3 from "../../Images/off3.png";
import off4 from "../../Images/off4.png";
import off5 from "../../Images/off5.png";
import m1 from "../../Images/phone-01.jpg";
import m2 from "../../Images/c1.png";
import m3 from "../../Images/L1.png";
import m4 from "../../Images/wireless-02.png";
import m5 from "../../Images/wireless-04.png";
import m6 from "../../Images/watch-04.jpg";
import M1 from "../../Images/M1.jpg";

import "../../components/Pagestyle.css";
// import { NavLink, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Banners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handlePizzas = () => {
    navigate("/pizzas");
  };
  const handleFood = () => {
    navigate("/Food");
  };
  const handleRoyal = () => {
    navigate("/Royal");
  };
  const handleWraps = () => {
    navigate("/Wraps");
  };
  const handleRice = () => {
    navigate("/Rice");
  };
  const handlehome = () => {
    navigate("/home");
  };
  const handleice = () => {
    navigate("/ice");
  };
  const handleDessert = () => {
    navigate("/Dessert");
  };
  const handleVegmeals = () => {
    navigate("/Vegmeals");
  };
  const handleHyderabad = () => {
    navigate("/Hyderabad");
  };

  return (
    <div className="bannerSection">
      <h2 className="banner-title">Mega Deals</h2>
      <div className="container-fluid">
        <div className="row">
          <Slider {...settings}>
            <div className="col">
              <div className="box">
                <img src={off1} className="w-100 transition" alt="Banner 1" />
              </div>
            </div>

            <div className="col">
              <div className="box">
                <img src={off2} className="w-100 transition" alt="Banner 2" />
              </div>
            </div>

            <div className="col">
              <div className="box">
                <img src={off3} className="w-100 transition" alt="Banner 3" />
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img src={off4} className="w-100 transition" alt="Banner 3" />
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img src={off5} className="w-100 transition" alt="Banner 3" />
              </div>
            </div>
          </Slider>

          <div className="row">
            <div className="col">
              <h2 className="menu-heading">New Arrivals</h2>
              <div className="d-flex justify-content-between align-items-center">
                <div className="menu-item">
                  <img src={m1} alt="Menu 1" />
                  <p>iphone</p>
                </div>

                <div className="menu-item">
                  <img src={m2} alt="Menu 1" />
                  <p>CPU</p>
                </div>

                <div className="menu-item">
                  <img src={m3} alt="Menu 1" />
                  <p>Laptop</p>
                </div>
                <div className="menu-item">
                  <img src={m4} alt="Menu 1" />
                  <p> Headphones</p>
                </div>

                <div className="menu-item">
                  <img src={m5} alt="Menu 1" />
                  <p>wireless</p>
                </div>

                <div className="menu-item">
                  <img src={m6} alt="Menu 1" />
                  <p>watch</p>
                </div>
                <div className="menu-item">
                  <img src={M1} alt="Menu 1" />
                  <p>mouse</p>
                </div>
                {/* <div onClick={handleDessert} className="menu-item">
                  <img src={m8} alt="Menu 1" />
                  <p>Desserts</p>
                </div>
                <div onClick={handleVegmeals} className="menu-item">
                  <img src={m9} alt="Menu 1" />
                  <p>VegMeals</p>
                </div>
                <div onClick={handleHyderabad} className="menu-item">
                  <img src={m10} alt="Menu 1" />
                  <p>Hyderabad</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
