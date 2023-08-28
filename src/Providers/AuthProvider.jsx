import React, { createContext, useEffect, useState } from "react";
export const authContext = createContext(null);
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const customId = "custom-id-yes";
import app from "../Utilities/Firebase/Firebase.config";
import { toast } from "react-toastify";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
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
  const logOut = () => {
    return signOut(auth).then(() => {
      toast.dark("User Logged Out", {
        icon: "✔",
        position: "top-center",
        toastId: customId,
      });
    });
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub;
  }, []);
  console.log(user);
  const authData = {
    login,
    glogin,
    resetPass,
    loading,
    gitLogin,
    creaeNewUser,
    updatePro,
    user,
    logOut,
  };
  return (
    <authContext.Provider value={authData}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
