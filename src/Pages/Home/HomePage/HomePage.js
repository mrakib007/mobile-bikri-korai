import React from 'react';
import Home from '../Home/Home';
import HomePageCards from '../HomePageCards/HomePageCards';
import Testimonial from '../Testimonial/Testimonial';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <HomePageCards></HomePageCards>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default HomePage;