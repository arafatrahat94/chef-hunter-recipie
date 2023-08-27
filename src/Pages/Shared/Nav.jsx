import React from "react";
import DarkmodeButton from "../../Components/DarkmodeButton";

const Nav = () => {
  return (
    <div>
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn pe-0 btn-ghost normal-case text-2xl font-bold text-pink-600 font-DancingS">
            Foody World
          </a> */}
        </div>
        <div className="navbar-start  hidden lg:flex">
          <a className="btn pe-0 dark:text-pink-600 dark:font-extrabold  btn-ghost normal-case text-2xl font-bold   font-DancingS">
            Foody World
          </a>
          <ul className="menu menu-horizontal font-Nunito ps-4 font-bold text-base px-1">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <DarkmodeButton></DarkmodeButton>
          </div>
          <button className="btn  dark:rounded-lg bg-pink-600 px-8 text-white font-Nunito focus:ring ring-pink-600 focus:bg-white focus:text-pink-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
