// src/components/admin/UserForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    username: '',
    // Ajoutez d'autres champs de formulaire selon vos besoins
  });

  useEffect(() => {
    // Si un ID d'utilisateur est fourni, chargez les données de l'utilisateur existant
    if (userId) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/admin/users/${userId}`);
          setFormData(response.data);
        } catch (error) {
          console.error(`Une erreur s'est produite lors de la récupération de l'utilisateur avec l'ID ${userId}`, error);
        }
      };

      fetchUser();
    }
  }, [userId]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (userId) {
        // Si un ID d'utilisateur est fourni, effectuez une requête de mise à jour
        await axios.put(`http://localhost:8000/admin/users/${userId}`, formData);
      } else {
        // Sinon, effectuez une requête de création
        await axios.post('http://localhost:8000/admin/users', formData);
      }

      // Réinitialisez le formulaire après la soumission réussie
      setFormData({
        username: '',
        // Réinitialisez les autres champs du formulaire selon vos besoins
      });
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la soumission du formulaire', error);
    }
  };

  return (
    <div>
      <h2>{userId ? 'Modifier' : 'Créer'} un Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        {/* Ajoutez d'autres champs de formulaire selon vos besoins */}
        <button type="submit">{userId ? 'Modifier' : 'Créer'}</button>
      </form>
    </div>
  );
};

export default UserForm;
