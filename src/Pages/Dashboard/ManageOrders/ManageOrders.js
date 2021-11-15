import React, { useState, useEffect } from "react";
import {usePharms} from 'react-router-dom'
import "./ManageOrders.css";
const ManageOrders = () => {
  const {ordersId} = usePharms();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-tor-93619.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = id =>{
    const url = `https://sleepy-tor-93619.herokuapp.com/allOrders${id}`;
    fetch(url,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

  }
  console.log(orders);
  return (
   
     <div className="container">
      <h1>All orders {orders.length}</h1>

      <Table striped bordered hover>
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
              
              <button onClick={()=>handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
          </tbody>
        ))}
      </Table>
      </div>
  );
};

export default ManageOrders;
