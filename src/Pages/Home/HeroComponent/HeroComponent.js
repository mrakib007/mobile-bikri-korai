import React from 'react';
import phoneHomepage from '../../../assets/images/phoneHomepage.jpg';
import heroCover from '../../../assets/images/heroCover.jpg'
import './Hero.css';

const HeroComponent = () => {
    return (
        // <div className="hero min-h-screen bg-base-200">
//         <div className="hero height">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     {/* <img src={phoneHomepage} className="max-w-sm rounded-lg shadow-2xl" /> */}
//     {/* <img src={phoneHomepage} className="max-w-xs rounded-lg shadow-2xl" /> */}
//     <img src={phoneHomepage} className="lg:max-w-xs  w-96 rounded-lg shadow-2xl" />
//     <div>
//       <h1 className="text-5xl font-bold">Box Office News!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>
// </div>
<section  class="text-gray-600 body-font max-w-[1210px] mx-auto my-10">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl  mb-4  text-5xl font-bold">Before they sold out</h1>
      <br />
        <h1 class="hidden lg:inline-block">readymade gluten</h1>
      
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={heroCover}/>
    </div>
  </div>
</section>
    );
};

export default HeroComponent;