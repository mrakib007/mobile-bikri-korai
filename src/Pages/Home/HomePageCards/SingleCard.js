import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({category}) => {
    const {_id,category:brand,logo} = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand}</h2>
        {/* <p>{description}</p> */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/mobiles/${_id}`}>Buy Now </Link></button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
