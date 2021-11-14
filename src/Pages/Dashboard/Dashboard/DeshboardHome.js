import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyBookings from '../MyBookings/MyBookings';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddServices from '../AddServices/AddServices';
import ManageServices from '../ManageServices/ManageServices';
import useAuth from "../../../hooks/useAuth";
import AdminCreation from '../MakeAdmin/AdminCreation';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MangeOrder from '../MangeOrder/MangeOrder';

const DeshboardHome = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <div classname="container">
          <div className="row">
              <div className="col-md-3">
              <h2>Admin Dashboard</h2>
              <Link to={`${url}`}>
                  <li>Book</li>
              
              </Link>
              <Link to={`${url}/myBooking`}>
                  <li>Booking List</li>
                  </Link>
              
              <Link to={`${url}/review`}>
                  <li>Review </li>
                  </Link>
              <Link to={`${url}/manageOrders`}>
                  <li>Manage Orders</li>
                  </Link>
                  <div className="text-primary p-5">
                      <li>Order List</li>
                      {
                          admin && (
                            <Link to={`${url}/addService`}>
                            <li>Add Services </li>
                            </Link> 
                            ) }

                            <Link to={`${url}/makeAdmin`}>
                            <li>make Admin</li>
                            </Link>
                            <Link to={`${url}/manageService`}>
                            <li>Manage Service</li>
                            </Link>
                            <Link to={`${url}/manageOrders`}>
                            <li>Manage Service</li>
                            </Link>

                  </div>
              </div>
              <div className="col-md-9">
                  <Switch>
                      <Route exact path={path}>
                          <MyBookings></MyBookings>
                      </Route>
                      <Route exact path={`${path}/review`}>
                          <MyBookings></MyBookings>
                      </Route>
                      <Route exact path={`${path}/review`}>
                          <Review></Review>
                      </Route>
                      <AdminRoute exact path={`${path}/makeAdmin`}>
                       <MakeAdmin></MakeAdmin>
                      </AdminRoute>
                      <AdminRoute exact path={`${path}/addService`}>
                      <AddServices></AddServices>
                      </AdminRoute>

                      <Route exact path={`${path}/manageService`}>
                        <ManageServices></ManageServices>
                      </Route>
                      <Route exact path={`${path}/manageOrders`}>
                       <MangeOrder></MangeOrder>
                      </Route>
                      
                  </Switch>

              </div>

          </div>
        </div>
    );
};

export default DeshboardHome;