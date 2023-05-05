import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const { reset } = useForm();
  const [token] = useToken(createdUserEmail);
  const from = location.state?.from.pathname || '/';

  if(token){
    navigate(from,{replace: true});
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    console.log(data);
    createUser(data.email, data.password, data.role).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("User created successfully!");
      const userInfo = {
        displayName: data.name,
      };
      updateUser(userInfo)
        .then(() => {
          saveUser(data.name, data.email, data.role);
        })
        .catch((error) => console.log(error));
    });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User saved");
        console.log("saved user", data);
        setCreatedUserEmail(email);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error saving user");
      });
  };
  
  return (
    <div className="hero height bg-base-200  max-w-[1210px] mx-auto my-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up From Here!</h1>
          <p className="py-6 hidden lg:block">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary text-2xl">
              Log In
            </Link>{" "}
            from here.
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          {/* <form onSubmit={handleSubmit(handleSignUp)}> */}
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-6000">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must contain an uppercase, a number and special character",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  {" "}
                  <span className="label-text">Select Your Profile</span>
                </label>
                <div className="input-group w-full">
                  <select
                    {...register("role", {
                      required: true,
                    })}
                    className="select select-bordered"
                  >
                    <option>buyer</option>
                    <option>seller</option>
                  </select>
                </div>
              </div>
              <div className="form-control mt-6">
              <input
                  className="btn btn-primary "
                  value="Signup"
                  type="submit"
                ></input>
                {signUpError && <p className="text-red-600">{signUpError}</p>}
              </div>
              <div class="divider">OR</div>
              {/* <div className="form-control mt-6">
          <button className="btn btn-info">Continue with Google</button>
        </div> */}
            </form>
            <div className="form-control mt-6">
              <button className="btn btn-info">Continue with Google</button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
