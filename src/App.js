
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
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Dashbaord from './Pages/Dashboard/Dashboard/Dashbaord';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import DeshboardHome from './Pages/Dashboard/Dashboard/DeshboardHome';
import MangeOrder from './Pages/Dashboard/MangeOrder/MangeOrder';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';


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
          <Route exact path="/home">
            <Home></Home>
         </Route> 
          <Route exact path="/about">
           <About></About>
         </Route> 
          <Route exact path="/contact">
          <Contact></Contact>
         </Route> 
           <Route exact path="/register">
            <Register></Register>
          </Route> 
           <Route exact path="/login">
          <Login></Login>
          </Route> 
          {/* <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route> */}
          {/* <Route exact path="/services/:serviceId">
            <Details></Details>
          </Route> */}
         
         <PrivateRoute exact path="/order/:serviceId">
           <Booking></Booking>
         </PrivateRoute>
         <PrivateRoute exact path="/addSerives">
         <AddServices></AddServices>
         </PrivateRoute>
         <PrivateRoute exact path="/deshboard">
         <DeshboardHome></DeshboardHome>
         </PrivateRoute>
         <PrivateRoute exact path="/service">
          <Services></Services>
         </PrivateRoute>
         <PrivateRoute exact path="/manageOrders">
         <MangeOrder></MangeOrder>
         </PrivateRoute>
         <AdminRoute exact path="/makeAdmin">
           <MakeAdmin></MakeAdmin>

         </AdminRoute>
         
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
