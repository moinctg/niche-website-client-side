import React from 'react';
import react, { useEffect, useState } from "react";
import useAuth from '../../../hooks/useAuth';
const ReviewPage = () => {
    const [revies, setReives] = useState([]);
    const {user} = useAuth();
  useEffect(() => {
    fetch("https://sleepy-tor-93619.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setReives(data));
  }, []);
  console.log(revies);
    return (
      <div>
      <div className="slider-area ">
      <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="hero-cap text-center">
                          <h2>Customer Revies</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
      <div className="services">
        <div className="row container">
          {revies?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                {/* <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div> */}
                <h1>{user?.name}</h1>
                <p>{pd.email}</p>
                <p>{pd.comments} <br/>
                  *****
                

                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
 

    );
};

export default ReviewPage;