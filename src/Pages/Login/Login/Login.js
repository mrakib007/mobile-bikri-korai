import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const {register,handleSubmit,formState:{errors}} = useForm();

  const handleLogin = (data) =>{

  }
  return (
    <div className="hero height bg-base-200  max-w-[1210px] mx-auto my-auto">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 hidden lg:block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p>Don't have an account? <Link to="/signup" className='text-primary'>Sign Up</Link> from here.</p>
    </div>

    
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleLogin)}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          {...register("email",{
            required:"Email address is required"
          })} 
          placeholder="email" className="input input-bordered" />
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
          {...register("password",{
            required: "Password is required",
            minLength: {value: 6, message: "Password must be 6 characters or longer"}
          })} placeholder="password" className="input input-bordered" />
         {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input className='btn btn-primary 'value="Login" type="submit"></input>
        </div>
        <div class="divider">OR</div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Continue with Google</button>
        </div>
      </div>
      </form>
    </div>



  </div>
</div>
  );
};

export default Login;