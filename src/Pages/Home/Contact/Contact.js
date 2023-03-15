import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-[1210px] mx-auto my-10'>
        <div className="w-full lg:w-1/2 mx-auto">
        <h5 className="text-center text-xl text-primary">Contact Us</h5>
        <h2 className="text-center text-3xl text-white">Stay Connected With Us</h2>
        <div className="form-control">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-3"
          />
          <textarea
            className="textarea textarea-bordered mt-3"
            placeholder="Bio"
          ></textarea>
          <div className="mx-auto mt-3">
    <a className="btn">Get started</a>
  </div>
        </div>
        
      </div>
      </div>
    );
};

export default Contact;