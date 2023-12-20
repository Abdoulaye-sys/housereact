// src/components/admin/UserDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/admin/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(`Une erreur s'est produite lors de la récupération de l'utilisateur avec l'ID ${userId}`, error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>Détails de l'Utilisateur</h2>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      {/* Ajoutez d'autres propriétés de l'utilisateur que vous souhaitez afficher */}
    </div>
  );
};

export default UserDetail;
