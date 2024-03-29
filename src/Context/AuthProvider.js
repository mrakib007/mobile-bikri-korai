import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const providerLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser,userInfo);
  }

  const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      // if(currentUser){
      //   console.log('Observing user');
      //   setUser(currentUser);
      //   setLoading(false);
      // }else{
      //   setUser(null);
      //   setLoading(false);
      // }

      console.log('observing user');
      setUser(currentUser);
      setLoading(false);
        
    });
    return () => unsubscribe();
  },[])

  const authInfo = {
    createUser,
    updateUser,
    providerLogin,
    signIn,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
