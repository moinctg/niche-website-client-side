
import React from 'react';
import react, { useState, useEffect } from "react";
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/myOrder/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }, [user?.email]);


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `http://localhost:8000/myOrder/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
     if(data.deletedCount > 0) {
       alert('Orders Succefully Deleted');
       const remaining = orders.filter(order=> order._id !== id);
       setOrders(remaining);
       console.log(setOrders);
       
     }

     });
    }
  

  
  

  }

    return (
        <div className="container">
      <h1> My  Orders {orders.length}</h1>

      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        {
         orders.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
             <td> <img src={pd.image} alt="" style={{height:'150px'}}/> </td>
             <td>{pd.customer}</td>
              <td>{pd.address}</td>
              <td>{pd.contact}</td>
           
              <button onClick={()=> handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
              </tr>
          </tbody>
        ))}
      </table>
      </div>
    );
};

export default MyOrders;