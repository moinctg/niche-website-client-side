import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    
   

        <div className="header-area">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="menu-wrapper">
                       
                        <div className="logo">
                            <Link to ="/home"><img src="assets/img/logo/logo.png" alt=""/></Link>
                        </div>
                        
                        <div className="main-menu d-none d-lg-block">
                            <nav>                                                
                                <ul id="navigation">  
                                    <li><Link to ="/home">Home</Link></li>
                                    <li><Link to="/about">about</Link></li>
                                    {/* <li className="hot"><Link to ="#">Latest</Link>
                                        <ul className="submenu">
                                            <li><a href=""> Product list</a></li>
                                            <li><a href=""> Product Details</a></li>
                                        </ul>
                                    </li> */}
                                   
                                    <li><Link  to="/products">Products</Link>
                                       
                                    </li>
                                    <li><Link to ="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                       
                        <div className="header-right">
                            <ul>
                                <li>
                                    <div className="nav-search search-switch">
                                        <span className="flaticon-search"></span>
                                    </div>
                                </li>
                                
                                {
                                 user?.email? 
                                 <div>   <button className=" button button-contactForm boxed-btn" onClick={logout}> Logout</button>
                                  <Link to ="/deshboard"><span className="flaticon-user  text-danger "></span>Deshboard</Link> 
                                  <p> Signed in as: <Link className=" text-danger " to="/login">{user?.displayName}</Link></p>
                                 
                                 </div>
                               : 
                                 <li> < Link to ="/login"><span className="flaticon-user text-danger "></span>Login</Link> <br/>
                                
                                 
                                 </li>
                                
                                 
                                }
                                 

                                {/* <li><Link to=""><span className="flaticon-shopping-cart"> Shoping Cart</span></Link> </li> */}
                            </ul>
                        </div>
                    </div>
                  
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
        
  
        </div>
    );
};

export default Navigation;