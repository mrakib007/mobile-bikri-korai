import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
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
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;