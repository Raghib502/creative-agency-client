import React from 'react';
import Contact from '../Contact/Contact';
import FullHeader from '../FullHeader/FullHeader';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div className="container">
            <FullHeader></FullHeader>
            <Partner></Partner>
            <Services></Services>
            <Works></Works>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;