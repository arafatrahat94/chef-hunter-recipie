import React, { Children } from "react";

import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "px-2 py-2 text-pink-600" : "")}
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
