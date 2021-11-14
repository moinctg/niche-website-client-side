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
      {
      orders.map(order=><div
      key = {order.id}
      >
        <h3>Order Name: {order.name}</h3>
        <h3>Order Name: {order.Email}</h3>
        </div>
          )
      }
    </div>
  );
};

export default MyBookings;
