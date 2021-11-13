import React from 'react';

import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, name, price,description, image,model } = service;
    
    return (
        <div>
              <div className="service pb-3">
            <div><img src={image} alt="" /></div>
            <div><h2 className="text-center p-3">{name}</h2>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
           
            <p className="px-3">{model}</p>
           
            </div>
            
            
        </div>
        <div className="p-2 text-center">
            <Link to={`/order/${ _id }`}>
        <button className="btn btn-primary text-center ">Book {name.toLowerCase()}</button>
    </Link>
            </div>
            </div>
       
    );
};

export default Service;