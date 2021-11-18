import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/allServices")
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
                                <h2>Our Products</h2>
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

export default Services;
