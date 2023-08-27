import React, { createContext } from "react";
export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const login = (email, pass) => {
    return;
  };
  const authData = {};
  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
