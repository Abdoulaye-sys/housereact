// AuthContext.jsx

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  const signIn = async (email, password) => {
    try {
      // Appel à l'API pour la connexion
      const response = await axios.get('/api/users', {
        params: { email, password },
      });
  
      // Vérifiez la structure de la réponse de l'API
      console.log('API response after signIn:', response.data);
  
      // Mise à jour de l'état d'authentification avec les informations de l'utilisateur
      setAuthState(response.data.user);
  
      console.log('authState after signIn:', authState);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      throw error;
    }
  };
    
  const signOut = () => {
    // Vous devez gérer la déconnexion selon votre logique spécifique ici
    // Par exemple, effacer le token JWT dans le stockage local
    localStorage.removeItem('authToken');

    // Mise à jour de l'état d'authentification à null
    setAuthState(null);
  };

  return (
    <AuthContext.Provider value={{ authState, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
