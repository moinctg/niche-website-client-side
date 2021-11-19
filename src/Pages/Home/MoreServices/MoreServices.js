import React from 'react';
import { Link } from "react-router-dom";
import react, { useEffect, useState } from "react";

const MoreServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://sleepy-tor-93619.herokuapp.com/allService")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
        <div>
        <div className="slider-area ">
        <div className="single-slider slider-height2 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap text-center">
                            <h2>Our  All  Watch </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div className="services">
    <div className="row container">
      {services?.map((pd, index) => (
        <div className="col-md-6 col-lg-4">
          <div className="service p-3 border border m-2">
            <div className="service-img">
              <img className="w-50" src={pd?.image} alt="" />
            </div>
            <h1>Name:{pd.name}</h1>
            <p>Description:{pd.description}</p>
            <p> Price:$ {pd.price}</p>
            <Link to={`/order/${pd._id}`}>
              {" "}
              <button className="button button-contactForm boxed-btn">Order Now</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    );
};

export default MoreServices;