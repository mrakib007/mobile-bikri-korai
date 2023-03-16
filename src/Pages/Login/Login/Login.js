// import React from 'react';

// const Login = () => {
//     return (
//      <section className='lg:my-32 my-20'>
//         <h1 className='text-5xl font-bold text-center lg:py-12 py-4'>Log In Now!</h1>
//     <div className="flex justify-center ">
        
//     <div className="card w-full max-w-sm shadow-2xl bg-base-100">
//       <div className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="text" placeholder="email" className="input input-bordered" />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="text" placeholder="password" className="input input-bordered" />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Login</button>
//         </div>
//       </div>
//     </div>
//     </div>
//     </section>

//     );
// };

// export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="hero height bg-base-200  max-w-[1210px] mx-auto my-auto">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 hidden lg:block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p>Don't have an account? <Link to="/signup" className='text-primary'>Sign Up</Link> from here.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
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
</div>
  );
};

export default Login;