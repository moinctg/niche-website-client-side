import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";


const MyBookings = () => {
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://sleepy-tor-93619.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user?.email]);

  return (
    <div>
      <h1>MyBookings</h1>
    </div>
  );
};

export default MyBookings;
