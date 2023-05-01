import React from "react";

const MobileDetail = ({ mobile,setProductBooking }) => {
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
        <p class="leading-relaxed text-base">{word}</p>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 underline decoration-indigo-400">
          Original Price: {original_price}
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 underline decoration-indigo-400">
          Resale Price: {resale_price}
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 underline decoration-indigo-400">
          Resale Price: {years_of_use}
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 underline decoration-indigo-400">
          Resale Price: {seller_name}
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 underline decoration-indigo-400">
          Resale Price: {location}
        </h2>
        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 underline decoration-indigo-400">
          Resale Price: {posted}
        </h2>

        {/* <button className='btn btn-primary'>Button</button> */}

        <label htmlFor="booking-modal" className="btn"
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
