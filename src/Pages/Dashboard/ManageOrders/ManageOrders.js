import React, { useState, useEffect } from "react";
import "./ManageOrders.css";
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-tor-93619.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div>
      <h1>ManageOrders</h1>
    </div>
  );
};

export default ManageOrders;
