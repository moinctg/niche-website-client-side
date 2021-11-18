import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from '.././src/context/AuthProvider';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Booking/Details';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Dashbaord from './Pages/Dashboard/Dashboard/Dashbaord';
import MoreServices from './Pages/Home/MoreServices/MoreServices';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
         </Route> 
          <Route  path="/about">
           <About></About>
         </Route> 
          <Route  path="/contact">
          <Contact></Contact>
         </Route> 
           <Route path="/register">
            <Register></Register>
          </Route> 
           <Route  path="/login">
          <Login></Login>
          </Route> 
          {/* <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route> */}
          {/* <Route exact path="/services/:serviceId">
            <Details></Details>
          </Route> */}
         
         <PrivateRoute  path="/order/:serviceId">
         <Details></Details>
         </PrivateRoute>
         {/* <PrivateRoute exact path="/addSerives">
         <AddServices></AddServices>
         </PrivateRoute> */}
         <PrivateRoute  path="/deshboard">
        <Dashbaord></Dashbaord>
         </PrivateRoute>
         <PrivateRoute exact path="/services">
          <Services></Services>
         </PrivateRoute>
         <PrivateRoute exact path="/products">
          <MoreServices></MoreServices>
         </PrivateRoute>
         
         
         
          {/* <Route exact path=" * ">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
  
    </div>
  );
}


export default App;
