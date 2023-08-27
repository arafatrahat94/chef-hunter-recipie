import React, { useContext, useRef, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { authContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const customId = "custom-id-yes";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const {
    login,
    glogin,

    loading,
    gitLogin,
    creaeNewUser,
    updatePro,
  } = useContext(authContext);
  const [erros, setErros] = useState("");
  const emaiRef = useRef(null);
  const handlelogin = (event) => {
    event.preventDefault();
    setErros("");
    const email = event.target.email.value;
    const pass = event.target.password.value;
    const name = event.target.name.value;
    const photourl = event.target.photourl.value;
    if (pass.length < 6) {
      setErros("Password length is less than 6");
      return;
    } else if (!/(?=.*[A-Z])/.test(pass)) {
      setErros("Please add 1 Uppercase in password");
      return;
    } else if (!/(?=.*[0-9])/.test(pass)) {
      setErros("Please add 1 number digit in password");
      return;
    }
    creaeNewUser(email, pass)
      .then(() => {
        toast.dark("User Created Successfully", {
          icon: "💢",
          position: "top-center",
          toastId: customId,
        });
        setErros("");
        updatePro(name, photourl);
      })
      .catch((error) => {
        setErros(error.message);
      });
  };
  const handleGlogin = () => {
    glogin().then(() => {
      setErros("");
    });
  };
  const handleGitLogin = () => {
    gitLogin().then(() => {
      setErros("");
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
                Please Register
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-600">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  ref={emaiRef}
                  onFocus={() => setErros("")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-600">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="paste the url link"
                  name="photourl"
                  ref={emaiRef}
                  onFocus={() => setErros("")}
                  className="input input-bordered"
                />
              </div>
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
                    to="/login"
                    className="text-pink-600 label-text-alt link link-hover"
                  >
                    Already Have An Account?
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

export default Register;
