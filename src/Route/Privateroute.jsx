import React, { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import LoadingAnimation from "../Components/LoadingAnimation";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {
  const location = useLocation();
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
  if (loading) {
    return <LoadingAnimation />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={{ from: location }} replace={true} to="/login"></Navigate>
  );
};

export default Privateroute;
