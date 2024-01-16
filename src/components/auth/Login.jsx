import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoyer les données de connexion à l'API Symfony
      const response = await axios.get('http://127.0.0.1:8000/api', formData);

      // Traiter la réponse de l'API (par exemple, afficher un message de succès)
      console.log('Connexion réussie:', response.data);

      // Réinitialiser le formulaire après une connexion réussie
      setFormData({
        email: '',
        password: '',
      });

      // Rediriger l'utilisateur vers la page d'accueil
      history.push('/');
    } catch (error) {
      // Gérer les erreurs lors de la connexion (par exemple, afficher un message d'erreur)
      console.error('Erreur lors de la connexion:', error.message);
      setError('Adresse e-mail ou mot de passe incorrect.');
    }
  };

  return (
    <div className='container'>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Adresse e-mail'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Mot de passe'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit' style={{ marginTop: '10px' }}>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
