// src/context/FirebaseContext.js
import React, { createContext, useContext, useState } from 'react';
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db, firebaseAuth } from './firebaseConfig';
// import { login, logout, obterDadosUsuario, obterTarefasUsuario } from '../helpers/requisicoes';


const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({})
  // console.log('userData ===', userData)

  // const getDocsFirebase = async (q) => {
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     const dataQuery = doc.data();
  //     console.log('dataQuery ===', dataQuery);
  //     setUserData({
  //       dataQuery
  //     })
  //     return dataQuery;
  //   })
  // }

  // useEffect(() => {
  //   try {
  //     const user = firebaseAuth.currentUser.email;
  //     if(user){
  //       const docRef = collection(db, "Users");
  //       const q = query(docRef, where("email", "==", user));
  //       const data = getDocsFirebase(q)
  //     }
  //   } catch (error) {
  //     const errorMessage = error.message;
  //     console.log('errorMessage ===', errorMessage);
  //   }
  // }, [])

  return (
    <FirebaseContext.Provider value={{ userData, setUserData }}>
      {children}
    </FirebaseContext.Provider>
  );
};
