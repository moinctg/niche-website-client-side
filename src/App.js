
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
           <Route exact path="/register">
            <Register></Register>
          </Route> 
           <Route exact path="/login">
          <Login></Login>
          </Route> 
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          {/* <Route exact path="/services/:serviceId">
            <Details></Details>
          </Route> */}
         
          {/* <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route> */}
          {/* <Route path="/dashboard">
            <Dashbaord></Dashbaord>
          </Route> */}
          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
  
    </div>
  );
}


export default App;
