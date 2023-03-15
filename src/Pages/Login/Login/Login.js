import React from 'react';

const Login = () => {
    return (
     <section className='lg:my-32 my-20'>
        <h1 className='text-5xl font-bold text-center lg:py-12 py-4'>Log In Now!</h1>
    <div className="flex justify-center ">
        
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
    </div>
    </section>

    );
};

export default Login;