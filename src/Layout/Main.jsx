import React from "react";
import { Navigate, Outlet, useNavigation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import LoadingAnimation from "../Components/LoadingAnimation";
import Footer from "../Pages/Shared/Footer";

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

      {navigate.state === "loading" ? (
        ""
      ) : (
        <>
          <Outlet></Outlet>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Main;
