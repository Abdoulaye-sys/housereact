import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';  // Importez useHistory pour gérer la redirection

const Register = () => {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    upass: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);  // Nouvel état pour suivre l'état de réussite
  const history = useHistory();  // Utilisez useHistory pour gérer la redirection

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users', formData, {
        headers: {
          'Content-Type': 'application/ld+json',
          'Accept': 'application/ld+json',
        },
      });

      console.log('Inscription réussie:', response.data);

      setSuccess(true);  // Mettez à jour l'état de réussite

      // Réinitialiser le formulaire après une inscription réussie
      setFormData({
        uname: '',
        uemail: '',
        uphone: '',
        upass: '',
      });

      // Réinitialiser les erreurs
      setError('');
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error.message);
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    // Si l'inscription réussit, redirigez l'utilisateur vers la page de connexion après 2 secondes
    if (success) {
      setTimeout(() => {
        history.push('/login');  // Redirigez vers la page de connexion
      }, 2000);  // Délai de 2 secondes avant la redirection
    }
  }, [success, history]);

  return (
    <div className='container'>
      <h2>Inscription</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Inscription réussie ! Redirection vers la page de connexion...</p>}
      <form onSubmit={handleSubmit}>
      <input
          type='text'
          name='uname'
          placeholder='Nom'
          value={formData.uname}
          onChange={handleChange}
          autoComplete='username'
        />
        <input
          type='email'
          name='uemail'
          placeholder='E-mail'
          value={formData.uemail}
          onChange={handleChange}
          autoComplete='email'
        />
        <input
          type='text'
          name='uphone'
          placeholder='Numéro de téléphone'
          value={formData.uphone}
          onChange={handleChange}
        />
        <input
          type='password'
          name='upass'
          placeholder='Mot de passe'
          value={formData.upass}
          onChange={handleChange}
          autoComplete='new-password'
        />
        <button type='submit'>S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
