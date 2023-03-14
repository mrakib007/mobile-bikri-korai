import React from 'react';
import './SingleReason.css';
const SingleReason = ({reason}) => {
    const {img,title,description} = reason;
    return (
//         <div className="card card-compact w-96 bg-base-100 shadow-xl">
//   <figure><img src={img} className='h-90' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">{title}</h2>
//     <p>{description}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
<div className='py-5 px-5'>
    <div className='flex justify-center'>
        <img src={img} className= "image-height rounded-full" alt="" />
    </div>
    <div>
        <h3 className='text-center font-bold text-2xl'>{title}</h3>
        <p className='text-center'>{description}</p>
    </div>
</div>
    );
};

export default SingleReason;