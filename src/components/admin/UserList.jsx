// src/components/admin/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
