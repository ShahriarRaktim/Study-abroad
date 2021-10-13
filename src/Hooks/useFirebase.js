import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitializeApp from '../components/Firebase/firebase.init';

firebaseInitializeApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
      return  signInWithPopup(auth, googleProvider);
        
    }

    const Logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    onAuthStateChanged(auth, user=>{
        if(user){
            setUser(user)
        }
    })
    return {
        user,
        googleSignIn,
        Logout
    }

};

export default useFirebase;
