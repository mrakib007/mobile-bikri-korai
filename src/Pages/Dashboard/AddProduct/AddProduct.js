import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit,formState: {errors} } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='ml-5'>
        <h3 className='text-3xl text-primary'>Add a Phone</h3>
       
  <div className="flex-col mt-8">
    <form onSubmit={handleSubmit()}>
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
    </form>
  </div>

      </div>
    );
    
};

export default AddProduct;