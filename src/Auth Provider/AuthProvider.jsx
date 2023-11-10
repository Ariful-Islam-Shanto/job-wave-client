import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import axios from 'axios';
// import useAxios from '../Hooks/useAxios';



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    // const [modeTheme, setModeTheme] = useState(null);
    // const axios = useAxios();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
   
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    
    const facebookProvider = new FacebookAuthProvider();

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider);
    }

   
    const logOut = () => {
        return signOut(auth);
    }

    // const handleMode = (mode) => {
    //     setModeTheme(mode);
    // }

    //? Observe auth state change (get the currently signed-in user)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
           

            if (currentUser) {
                setLoading(false);
                axios
                  .post(
                    "https://job-wave-server.vercel.app/jwt",
                    loggedUser
                    , {withCredentials : true}
                  )
                  .then((res) => {
                    console.log(res.data);
                    
                  });
              }
              else {
                setLoading(true); 
                axios
                  .post(
                    "https://job-wave-server.vercel.app/clearCookie",
                    loggedUser, {withCredentials : true}
                  )
                  .then((res) => {
                    console.log(res.data);
                  });
                 
              }
              
        })

        return () => {
            unSubscribe();
        }
    },[axios])

    const authInfo = {user, createUser, userLogIn, loading, githubLogin, googleLogin, facebookLogin, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;