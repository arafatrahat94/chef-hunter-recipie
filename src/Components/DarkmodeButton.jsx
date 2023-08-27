import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { BsSunFill } from "react-icons/bs";

const DarkmodeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("black");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className=" flex justify-center me-2">
      <button className="btn btn-square btn-ghost">
        <label className="swap swap-rotate w-12 h-12">
          <input type="checkbox" onChange={handleToggle} />
          {/* light theme sun image */}
          <BsSunFill className="w-8 h-8 swap-on" />
          {/* dark theme moon image */}
          <FaRegMoon className="w-8 h-8 swap-off" />
        </label>
      </button>
    </div>
  );
};

export default DarkmodeButton;
