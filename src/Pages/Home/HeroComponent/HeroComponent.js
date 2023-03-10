import React from 'react';
import phoneHomepage from '../../../assets/images/phoneHomepage.jpg';
import './Hero.css';

const HeroComponent = () => {
    return (
        // <div className="hero min-h-screen bg-base-200">
        <div className="hero height">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img src={phoneHomepage} className="max-w-sm rounded-lg shadow-2xl" /> */}
    {/* <img src={phoneHomepage} className="max-w-xs rounded-lg shadow-2xl" /> */}
    <img src={phoneHomepage} className="lg:max-w-xs  w-96 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default HeroComponent;