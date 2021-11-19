import React, { useEffect,useState } from "react";
import useAuth from "../../../hooks/useAuth";


const MyBookings = () => {
  const { user } = useAuth();
  const [orders,setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://sleepy-tor-93619.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  return (
    <div>
      <h1>My Orders: {orders.length}</h1>


      <table className="table table-bordered  ">
        <thead className="text-secondary">
          <tr>
            <th>#</th>
            <th>Service Title</th>
            <th>Event description</th>
            <th>Image Link</th>
            <th>Price</th>
            <th>Model</th>
            <th className="text-primary">stutus</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Contact</th>
            
            
          </tr>
        </thead>
        
      
          <tbody>
            {
              orders.map(pd  => (
            <tr>
              <td>{pd.index}</td>
              <td>{pd.name}</td>
              <td>{pd.description}</td>
              <td>
                <img src={pd.image} alt="" style={{height:'150px'}}/>
                </td>
              <td>{pd.price}</td>
              <td>{pd.model}</td>
              <td className="text-primary">{pd.status}</td>
              <td>{pd.customer}</td>
              <td>{pd.address}</td>
              <td>{pd.contact}</td>
              
      
      {/* // orders.map(order=><div
      {/* // key = {order.id} */}
      
        {/* // <h3>Order Name: {order.name}</h3>
        // <p>Order Description: {order.description}</p>
        // <p>price: {order.price}</p>
        // <p className="text-warning">Staus: {order.status}</p> */}
      
        </tr>
              ))}
          </tbody>
        
      </table>
      </div>
        
    
    
  );
};

export default MyBookings;
