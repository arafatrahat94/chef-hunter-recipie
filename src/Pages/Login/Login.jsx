import React, { useContext, useRef, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { authContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const customId = "custom-id-yes";
const Login = () => {
  const { login, glogin, resetPass, loading, gitLogin } =
    useContext(authContext);
  const [erros, setErros] = useState("");
  const emaiRef = useRef(null);
  const handlelogin = (event) => {
    setErros("");
    const email = event.target.email.value;
    const pass = event.target.password.value;
    login(email, pass)
      .then(() => {})
      .catch((error) => {
        setErros(error.message);
      });
    event.preventDefault();
  };
  const handleGlogin = () => {
    glogin()
      .then(() => {
        setErros("");
      })
      .catch((error) => {});
  };
  const handleGitLogin = () => {
    gitLogin()
      .then(() => {
        setErros("");
      })
      .catch((error) => {});
  };
  const sendResetPass = (event) => {
    resetPass(emaiRef.current.value).then(() => {
      toast.dark("Password reset link is emailed", {
        icon: "💢",
        position: "top-center",
        toastId: customId,
      });
    });
  };
  return (
    <div>
      <div className="grid min-h-[71vh] grid-cols-2 relative">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full mx-11/12 shadow-2xl bg-base-100">
            <form
              onSubmit={handlelogin}
              className="card-body shadow-lg rounded-lg shadow-pink-600"
            >
              <h1 className="text-center font-DancingS font-bold text-3xl tracking-wide mb-[-10px] text-pink-600">
                Please Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-600">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  ref={emaiRef}
                  onFocus={() => setErros("")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-600">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="pAssw0rd"
                  name="password"
                  onFocus={() => setErros("")}
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    onClick={sendResetPass}
                    className="text-pink-600 label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                  <Link
                    to="/Register"
                    className="text-pink-600 label-text-alt link link-hover"
                  >
                    New in Foody World?
                  </Link>
                </label>
              </div>
              <div>
                <h1 className="text-pink-600 my-1 text-center">
                  {erros?.split("Firebase: Error").join("").split(".").join("")}
                </h1>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-pink-600 btn-primary">Login</button>
              </div>
            </form>
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

          <div
            onClick={handleGlogin}
            className="form-control w-8/12 flex justify-center items-center mt-6"
          >
            <button className="btn bg-white text-pink-700 border-pink-600 border-2 btn-primary">
              <FaGoogle /> Login With Google
            </button>
          </div>
          <div
            onClick={handleGitLogin}
            className="form-control w-8/12 flex justify-center items-center mt-6"
          >
            <button className="btn bg-white text-pink-700 border-pink-600 border-2 btn-primary">
              <FaGithub /> Login With GitHub
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
