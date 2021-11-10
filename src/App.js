
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/myOrder">
            <MyBookings></MyBookings>
          </Route>
          <Route exact path="/services/:serviceId">
            <Details></Details>
          </Route>
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route>
          <Route path="/dashboard">
            <Dashbaord></Dashbaord>
          </Route>
          <Route exact path="/addService">
            <AddServices></AddServices>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
