import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [createUserEmail, setCreatedUserEmail] = useState("");
  const { providerLogin, signIn, updateUser,setUser,settingUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  // navigate(from,{replace: true});

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (data) => {
    console.log(data)
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        const userInfo = {
          displayName: data.name,
        };
        // console.log(userInfo);
        // setUser(user);
        settingUser(user);
        console.log(user)
        // updateUser(userInfo).then(() => {
        //   saveUser(data.name, data.email, data.role);
        // });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  // const saveUser = (name, email, role) => {
  //   const user = { name, email, role };
  //   fetch("https://y-9jemzp2tg-mrakib007.vercel.app/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("save user", data);
  //       setCreatedUserEmail(email);
  //     });
  // };
  return (
    <div className="hero height bg-base-200  max-w-[1210px] mx-auto my-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 hidden lg:block">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary text-2xl">
              Sign Up
            </Link>{" "}
            from here.
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          {/* <form onSubmit={handleSubmit(handleLogin)}> */}
            <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
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
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <input
                  className="btn btn-primary "
                  value="Login"
                  type="submit"
                ></input>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
              <div class="divider">OR</div>
              <div className="form-control mt-6">
                {/* <button onClick={handleGoogleSignIn} className="btn btn-info">
                  Continue with Google
                </button> */}
              </div>

              </form>
              <button onClick={handleGoogleSignIn} className="btn btn-info">
                  Continue with Google
                </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
