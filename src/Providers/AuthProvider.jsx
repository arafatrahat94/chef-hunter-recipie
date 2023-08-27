import React, { createContext, useState } from "react";
export const authContext = createContext(null);
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Utilities/Firebase/Firebase.config";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const login = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const glogin = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  const gitLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, new GithubAuthProvider());
  };
  const resetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const creaeNewUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const updatePro = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  const authData = {
    login,
    glogin,
    resetPass,
    loading,
    gitLogin,
    creaeNewUser,
    updatePro,
  };
  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
