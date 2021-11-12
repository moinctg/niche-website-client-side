import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Choice from '../Choice/Choice';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <Choice></Choice>

            <Contact></Contact>
          
           
        </div>
    );
};

export default Home;