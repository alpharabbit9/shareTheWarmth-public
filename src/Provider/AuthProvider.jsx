import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading , setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  console.log(user)

  

 const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
 }

 const createGoogleUser = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider);
 }

 const UserLogIn = (email ,password) =>{
    setLoading(true)

    return signInWithEmailAndPassword( auth , email ,password);

 }
 const userLogOut = () => {
    return signOut(auth);
  }

  const authInfo = { 
    user,
    setUser,
    createUser,
    userLogOut,
    UserLogIn,
    createGoogleUser,
    loading
  };

  

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged( auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    })

    return () =>{
        unSubscribe();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
