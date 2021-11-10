// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {
 Link
  
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../../hooks/useAuth";

import logo from '../../../images/logo.png';

const Header = () => {
  const {user,logOut} = useAuth();
  
    const backgroundStyle={
        background:'#FDF1DF'
    }
    return (
        <div>

            <main className="main" id="top">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container"><a className="navbar-brand" href=""><img src={logo} height="45" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2"><Link as={HashLink} className="nav-link" aria-current="page" to="/home#home">Home</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" to="/home#services">Our Services</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" to="/about">About us </Link></li>
              <li className="nav-item px-2"><Link  className="nav-link" to="/home#contact">Contact</Link></li>
              {/* <li className="nav-item px-2"><Link  className="nav-link"  to="">Register</Link></li> */}
             {user?.email?
              <button onClick={logOut} className="btn btn-warning ">Logout</button>:
              <Link className="btn btn-primary order-1 order-lg-0 ms-lg-3" to="/login">Login</Link>}
              Signed in as: <Link className=" btn btn-secondary " to="/login">{user?.displayName}</Link>
            <li className="nav-item px-2"><Link  className="nav-link"  to="/dashboard">admin</Link></li>
            </ul>
            <div className="dropdown d-none d-lg-block">
              <button className="btn bg-soft-warning ms-2" id="dropdownMenuButton1" type="submit" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-search text-warning"></i></button>
              <div className="dropdown-menu dropdown-menu-lg-end p-0 rounded" aria-labelledby="dropdownMenuButton1" style={{top:'55px'}}>
                <form>
                  <input className="form-control border-200" type="search" placeholder="Search" aria-label="Search" style= {backgroundStyle}/>
                </form>
              </div>
            </div>
            {/* <form className="d-flex my-3 d-block d-lg-none">
              <input className="form-control me-2 border-200 bg-light" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      {/* <section className="py-xxl-10 pb-0" id="home">
        <div className="bg-holder bg-size" style={style}>
        </div>
        
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src="assets/img/illustrations/hero.png" alt="hero-header" /></div>
            <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-8">
              <h1 className="fw-normal fs-6 fs-xxl-7">A trusted provider of </h1>
              <h1 className="fw-bolder fs-6 fs-xxl-7 mb-2">courier services.</h1>
              <p className="fs-1 mb-5">We deliver your products safely to <br />your home in a reasonable time. </p><a className="btn btn-primary me-2" href="#!" role="button">Get started<i className="fas fa-arrow-right ms-2"></i></a>
            </div>
          </div>
        </div>
      </section> */}
      </main>
      </div>
      
      
    );
};

export default Header;
