import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Choice from '../Choice/Choice';
import Contact from '../Contact/Contact';
import Services from '../Services/Services'
import ReviewPage from '../ReviewPage/ReviewPage';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Choice></Choice>
            <ReviewPage></ReviewPage>

            <Contact></Contact>
          
           
        </div>
    );
};

export default Home;