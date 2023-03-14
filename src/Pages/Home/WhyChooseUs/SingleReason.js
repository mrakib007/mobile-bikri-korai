import React from 'react';
import './SingleReason.css';
const SingleReason = ({reason}) => {
    const {img,title,description} = reason;
    console.log(reason)
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
<div>
    <div>
        <img src={img} className= "image-height rounded-2xl image-height" alt="" />
    </div>
    <div>
        {description}
    </div>
</div>
    );
};

export default SingleReason;