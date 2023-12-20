// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Remplacez par l'URL de votre backend Symfony
  withCredentials: true, // Permet de gérer les cookies pour l'authentification
});

export const login = async (username, password) => {
  try {
    const response = await instance.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Ajoutez d'autres fonctions de requête selon vos besoins
