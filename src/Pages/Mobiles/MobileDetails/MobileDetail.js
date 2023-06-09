import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MobileDetail = ({ mobile,setProductBooking }) => {
  const {user} = useContext(AuthContext);
  const {
    title,
    image_url,
    details,
    location,
    original_price,
    posted,
    resale_price,
    years_of_use,
    seller_name,
  } = mobile;
  const word = details.slice(0, 50);
  console.log(title);
  return (
    //         <section class="text-gray-600 body-font">
    //   <div class="container px-5 py-24 mx-auto">

    // <div class="flex flex-wrap -m-4">
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <div class="bg-gray-300 p-6 rounded-lg">
        <img
          class="h-40 rounded w-full object-cover object-center mb-6"
          src={image_url}
          alt="content"
        />
        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
          Thi is
        </h3>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        <p class="text-black text-base">{word}</p>

        <div className="flex justify-between">
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 flex">
          Original Price: 
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 mx-8 flex">
          {original_price} tk
        </h2>
        </div>

        <div className="flex justify-between">
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 flex">
        Resale Price: 
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 mx-8 flex">
        {resale_price} tk
        </h2>
        </div>

        <div className="flex justify-between">
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 flex">
           Years of use: 
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 mx-8 flex">
        {years_of_use}
        </h2>
        </div>

        <div className="flex justify-between">
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 flex">
           Seller Name: 
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 mx-8 flex">
        {seller_name}
        </h2>
        </div>

        <div className="flex justify-between">
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 flex">
           Location: 
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 mx-8 flex">
        {location}
        </h2>
        </div>

        <div className="flex justify-between">
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 flex">
           Post Date: 
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 my-2 mx-8 flex">
        {posted}
        </h2>
        </div>

        {/* <button className='btn btn-primary'>Button</button> */}

        <label htmlFor="booking-modal" className="btn btn-primary" disabled={!user}
        onClick={()=> setProductBooking(mobile)}>
          Buy Now
        </label>
      </div>
    </div>

    //  </div>

    //     </div>
    // </section>
  );
};

export default MobileDetail;
