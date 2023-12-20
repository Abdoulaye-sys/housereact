// src/components/admin/UserDelete.js

import React from 'react';
import axios from 'axios';

const UserDelete = ({ userId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/admin/users/${userId}`);
      // Ajoutez une logique de redirection ou de mise à jour de l'état après la suppression réussie
    } catch (error) {
      console.error(`Une erreur s'est produite lors de la suppression de l'utilisateur avec l'ID ${userId}`, error);
    }
  };

  return (
    <div>
      <h2>Supprimer un Utilisateur</h2>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default UserDelete;
