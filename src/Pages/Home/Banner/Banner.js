import React from 'react';
// import { Carousel,Item, } from 'react-bootstrap';
import slider1 from '../../../img/banner/slide1.jpg'
import slider2 from '../../../img/banner/slide2.jpg'
import slider3 from '../../../img/banner/slide7.jpg'
import slider4 from '../../../img/banner/slide4.jpg'
import slider5 from '../../../img/banner/slide6.jpg'




const Banner = () => {
    return (
       
       <div>


<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={slider1} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider4} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider5} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
{/*         
            <div className="slider-area ">
            <div className="slider-active">
               
                <div className="single-slider slider-height d-flex align-items-center slide-bg">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style</h1>
                                    <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                                   
                                    <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                        <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                    <img src={slider1} alt="" className=" heartbeat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-slider slider-height d-flex align-items-center slide-bg">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Select Your New Perfect Style</h1>
                                    <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                                    
                                    <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                                        <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                    <img src={slider1} alt="" className=" heartbeat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
       </div>
    );
};

export default Banner;