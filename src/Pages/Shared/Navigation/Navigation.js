import React from 'react';

import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {
    // const { user, logout } = useAuth();
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
                            <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                        </div>
                        
                        <div className="main-menu d-none d-lg-block">
                            <nav>                                                
                                <ul id="navigation">  
                                    <li><a href="">Home</a></li>
                                    <li><a href="">shop</a></li>
                                    <li><a href="">about</a></li>
                                    <li className="hot"><a href="#">Latest</a>
                                        <ul className="submenu">
                                            <li><a href=""> Product list</a></li>
                                            <li><a href=""> Product Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog</a>
                                        <ul className="submenu">
                                            <li><a href="">Blog</a></li>
                                            <li><a href="">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a>
                                        <ul className="submenu">
                                            <li><a href="">Login</a></li>
                                            <li><a href="">Cart</a></li>
                                            <li><a href="">Element</a></li>
                                            <li><a href="">Confirmation</a></li>
                                            <li><a href="">Product Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Contact</a></li>
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
                                <li> <a href=""><span className="flaticon-user"></span></a></li>
                                <li><a href=""><span className="flaticon-shopping-cart"></span></a> </li>
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