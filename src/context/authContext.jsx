/** @format */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  //Estado definido para ver si el usuario  esta logeado o no
  const [user, setUser] = useState(null);

  //evitar error del null porque aun no carga el estado

  const [loading, setLoading] = useState(true);

  //Funcion para crear usuarios con correo y contraseña
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //Funcion para logear el usuarioo
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //Funciono para el Logout

  const logout = () => signOut(auth);

  // ver cuando  el usuario esta logeado o no

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
