import React, { useContext } from "react";
import DarkmodeButton from "../../Components/DarkmodeButton";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import Activelink from "../../Components/Activelink";

const Nav = () => {
  const {
    login,
    glogin,
    resetPass,
    loading,
    gitLogin,
    creaeNewUser,
    updatePro,
    logOut,
    user,
  } = useContext(authContext);
  console.log(user?.displayName);
  return (
    <div className=" z-20">
      <div className="navbar p-2">
        <div className="navbar-start lg:hidden">
          <div className="dropdown z-20 lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Activelink to="/" className="px-2 py-2">
                <a>Home</a>
              </Activelink>

              <Activelink className="px-2 py-2">
                <a>Blogs</a>
              </Activelink>
              <Activelink to="/Favourite" className="px-2 py-2">
                <a>Favourites</a>
              </Activelink>

              {user ? (
                <>
                  <Link
                    onClick={logOut}
                    className="btn  dark:rounded-lg bg-pink-600 px-8 text-white font-Nunito focus:ring ring-pink-600 focus:bg-white focus:text-pink-600"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn  dark:rounded-lg bg-pink-600 px-8 text-white font-Nunito focus:ring ring-pink-600 focus:bg-white focus:text-pink-600"
                  >
                    Login
                  </Link>
                </>
              )}
            </ul>
          </div>
          <a className="btn pe-0 btn-ghost normal-case text-2xl font-bold text-pink-600 font-DancingS">
            Foody World
          </a>
        </div>
        <div className="navbar-start  hidden lg:flex">
          <a className="btn pe-0 dark:text-pink-600 dark:font-extrabold  btn-ghost normal-case text-2xl font-bold   font-DancingS">
            Foody World
          </a>
          <ul className="menu menu-horizontal flex justify-center items-center font-Nunito ps-4 font-bold text-base px-1">
            <Activelink to="/" className="px-2">
              <a>Home</a>
            </Activelink>

            <Activelink className="px-2">
              <a>Blogs</a>
            </Activelink>
            <Activelink to="/Favourite" className="px-2 py-2">
              <a>Favourites</a>
            </Activelink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
            <DarkmodeButton></DarkmodeButton>
          </div>
          {user ? (
            <div
              data-tip={user?.displayName}
              className="tooltip z-30 tooltip-left lg:tooltip-bottom w-8 lg:w-12 my-2 mx-3"
            >
              <img
                className="rounded-full ring ring-pink-600"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
          <div className="hidden lg:block">
            {user ? (
              <>
                <Link
                  onClick={logOut}
                  className="btn  dark:rounded-lg bg-pink-600 px-8 text-white font-Nunito focus:ring ring-pink-600 focus:bg-white focus:text-pink-600"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn  dark:rounded-lg bg-pink-600 px-8 text-white font-Nunito focus:ring ring-pink-600 focus:bg-white focus:text-pink-600"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Nav;
