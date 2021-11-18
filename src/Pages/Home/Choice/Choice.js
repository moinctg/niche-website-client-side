
import React from 'react';
import { Link} from "react-router-dom";
const Choice = () => {
    return (
        <div>
            <div className="video-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                    <div className="video-wrap">
                        <div className="play-btn "><a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04"><i className="fas fa-play"></i></a></div>
                    </div>
                    </div>
                </div>
              
                <div className="thumb-content-box">
                    <div className="thumb-content">
                        <h3>Next Video</h3>
                        <a href="#"> <i className="flaticon-arrow"></i></a>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="watch-area section-padding30">
            <div className="container">
                <div className="row align-items-center justify-content-between padding-130">
                    <div className="col-lg-5 col-md-6">
                        <div className="watch-details mb-40">
                            <h2>Boss Brand</h2>
                            <p>The BOSS brand prides itself on modern elegance and its stylish collection of men's and ladies' watches is no exception. Whether treating yourself to a touch of class or letting that special someone in your life know you care with a luxury gift, a BOSS watch makes a definitive style statement.
Internationally renowned for producing high-end luxury fashion products for the discerning customer, BOSS watches make the ideal finishing touch to a carefully chosen look. The distinctive style combines innovative design with a range of technical features, from chronograph technology to water resistance and much more. Premium materials in stunning formation characterise the Hugo Boss watch collection with a range of ideas to help you complete your personal.</p>
                            <Link to="service" className="btn">Show Watches</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-10">
                        <div className="choice-watch-img mb-40">
                            <img src="assets/img/gallery/choce_watch1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6 col-sm-10">
                        <div className="choice-watch-img mb-40">
                            <img src="assets/img/gallery/choce_watch2.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="watch-details mb-40">
                            <h2>Fossil Watches</h2>
                            <p>Established in 2021, the Fossil brand is inspired by classic American vintage wear. Fossil watches are designed to make statements, looking to act as a first impression for how wearers are viewed by others. Within the Fossil men's and women's watch collection Swiss craftsmanship is blended seamlessly with timeless designs and contemporary functionality, resulting in a range that has something to define almost anyone.
Fossil designers use a wide variety of materials and styles throughout the watch collection, from multi-faceted, colourful metals in gold, silver & rose gold to deconstructed leathers in black, brown tan & blue. Make a statement with technology-laden cases and mechanical watches that beautifully showcase the art of watchmaking, or enjoy a timeless look with minimalistic aesthetics - Fossil provides the discerning watch-buyer with multiple choices. To stay connected, Fossil's range of Fossil Q smartwatches feature fitness tracking, music control and smartphone notifications without compromising style.

Fossil watches are more than just a practical accessory they are a lifestyle choice that lets the world know who you are at a glance. Browse Fossil's range of men's and women's watches, or experience the same level of quality with different styles - Fossil also makes watches for a variety of other brands including including Diesel, Armani, Adidas and Marc Jacobs.</p>
                            <Link to="/service" className="btn">Show Watches</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>







































        
      
        <div className="shop-method-area">
            <div className="container">
                <div className="method-wrapper">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-package"></i>
                                <h6>Free Shipping Method</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-unlock"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div> 
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-reload"></i>
                                <h6>Essey  Delivery System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Choice;