import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";




import useAuth from "../../../hooks/useAuth";
import AddServices from "../AddServices/AddServices";
import ManageServices from "../ManageServices/ManageServices";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Review from "../Review/Review";
import MyBooking  from "../MyBookings/MyBookings";
import MangeOrder from "../MangeOrder/MangeOrder";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://sleepy-tor-93619.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to={`${url}/BookingList`}>
                <li className="dashboard-menu mt-5">Booking list</li>
              </Link>

              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <Link to={`${url}/manageOrders`}>
                <li className="dashboard-menu mt-5">Manage Order</li>
              </Link>
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list</li>

                {isAdmin && (
                  <Link to={`${url}/addService`}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )}
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageServices`}>
                  <li className="dashboard-menu">Manage Service</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
               <MyBooking></MyBooking>
              </Route>
              <Route  path={`${path}/review`}>
              <Review></Review>
              </Route>
              <Route  path={`${path}/BookingList`}>
                <MyBooking></MyBooking>
              </Route>
              <Route  path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              
              <Route  path={`${path}/manageOrders`}>
                <MangeOrder></MangeOrder>
              </Route>

              <Route  path={`${path}/addService`}>
                <AddServices></AddServices>
              </Route>
              <Route  path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
