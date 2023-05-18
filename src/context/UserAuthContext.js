import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const userContext = createContext();

export const UserAuthContext = ({ children }) => {
  const [user, setUser] = useState("");

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );
    return () => {
      unSub();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <userContext.Provider value={{ logIn, logOut, signUp, user }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userContext);
};
