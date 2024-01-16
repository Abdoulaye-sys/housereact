import React, { useState } from 'react';
import axios from 'axios';
// Login.js

const Login  = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer les données d'inscription à l'API Symfony
      const response = await axios.post('http://127.0.0.1:8000/api/users/register', formData);

      // Traiter la réponse de l'API (par exemple, afficher un message de succès)
      console.log('Connexion réussie:', response.data);

      // Réinitialiser le formulaire après une inscription réussie
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      // Gérer les erreurs lors de l'inscription (par exemple, afficher un message d'erreur)
      console.error('Erreur lors de la connexion:', error.message);
    }
  };

  return (
    <div className='container'>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Nom dutilisateur'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Mot de passe'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit' style={{ marginTop: '10px' }}>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
