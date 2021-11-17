import React  from 'react';
import react, { useState, useEffect } from "react";

import "./ManageOrders.css";
import { set } from 'react-hook-form';

const ManageOrders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-tor-93619.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `https://sleepy-tor-93619.herokuapp.com/allServices/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
     if(data.deleteCount > 0){
       alert('Orders Succefully Deleted');
       const remaining = orders.filter=(order=>order._id !== id);
       setOrders(remaining);
       console.log(setOrders);
       
     }

     });
    }
  

  
  

  }
  // console.log(orders);
  return (
   
     <div className="container">
      <h1>All orders {orders.length}</h1>

      <table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td>{pd.image}</td>
              
              <button onClick={()=> handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
          </tbody>
        ))}
      </table>
      </div>
  );
};

export default ManageOrders;
