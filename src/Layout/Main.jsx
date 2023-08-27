import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import LoadingAnimation from "../Components/LoadingAnimation";

const Main = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Nav></Nav>
      {navigate.state === "loading" ? (
        <>
          <LoadingAnimation></LoadingAnimation>
        </>
      ) : (
        ""
      )}

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
