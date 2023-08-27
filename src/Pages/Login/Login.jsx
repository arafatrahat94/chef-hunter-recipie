import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const Login = () => {
  return (
    <div>
      <div className="grid min-h-[71vh] grid-cols-2 relative">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full mx-11/12 shadow-2xl bg-base-100">
            <div className="card-body shadow-lg rounded-lg shadow-pink-600">
              <h1 className="text-center font-DancingS font-bold text-3xl tracking-wide mb-[-10px] text-pink-600">
                Please Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-600">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-600">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a
                    href="#"
                    className="text-pink-600 label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 label-text-alt link link-hover"
                  >
                    New in Foody World?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-600 btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-2 rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center font-Nunito">
            <span className="text-4xl font-DancingS mb-4">
              Experience a culinary journey through{" "}
              <span className="text-5xl font-DancingS text-pink-600 font-bold">
                Foody World's
              </span>{" "}
              diverse website,
            </span>
            <span className="text-4xl font-DancingS">
              offering a delectable array of global cuisines and gastronomic
              inspirations
            </span>
          </h1>

          <div className="form-control w-8/12 flex justify-center items-center mt-6">
            <button className="btn bg-white text-pink-700 border-pink-600 border-2 btn-primary">
              <FaGoogle /> Login With Google
            </button>
          </div>
          <div className="form-control w-8/12 flex justify-center items-center mt-6">
            <button className="btn bg-white text-pink-700 border-pink-600 border-2 btn-primary">
              <FaGithub /> Login With GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
