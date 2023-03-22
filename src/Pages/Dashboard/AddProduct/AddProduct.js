import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="ml-5">
      <h3 className="text-3xl text-primary">Add a Phone</h3>

      <div className="flex-col mt-8">
        {/* <form onSubmit={handleSubmit()}>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" {...register("productName", {
                                    required: "Product Name is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                 {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input type="text" {...register("originalPrice", {
                                    required: "Original Price is Required"
                                })} className="input input-bordered w-96 max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
    </form> */}
        <form onSubmit={handleSubmit()}>
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("productName", {
                required: "Product Name is Required",
              })}
              className="input input-bordered w-96 max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-96 max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", {
                required: "Original Price is Required",
              })}
              className="input input-bordered w-96 max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: "Resale Price is Required",
              })}
              className="input input-bordered w-96 max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-96 max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="number"
              {...register("number", {
                required: "Mobile Number is Required",
              })}
              className="input input-bordered w-96 max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-96 max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "Location Name is Required",
              })}
              className="input input-bordered w-96 max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Year of Purchase</span>
            </label>
            <input
              type="text"
              {...register("purchaseDate", {
                required: "Year of Purchase is Required",
              })}
              className="input input-bordered w-96 max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex justify-between">
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Product Condition</span>
              </label>
              <div className="input-group w-full">
                <select
                  {...register("condition", {
                    required: true,
                  })}
                  className="select select-bordered"
                >
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                {" "}
                <span className="label-text">Product Category</span>
              </label>
              <div className="input-group w-full">
                <select
                  {...register("category", {
                    required: true,
                  })}
                  className="select select-bordered"
                >
                  {/* {brands.map((brand) => (
                    <option key={brand._id} value={brand.id}>
                      {brand.category}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>
          </div>

          <textarea
            {...register("details", {
              required: true,
            })}
            className="textarea textarea-info mt-5 w-96"
            placeholder="Product Details"
          ></textarea>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            {/* {errors.img && <p className='text-red-500'>{errors.img.message}</p>} */}
          </div>

          <input className='btn btn-primary mt-4' value="Add Product" type="submit" />

        </form>
      </div>
    </div>
  );
};

export default AddProduct;
