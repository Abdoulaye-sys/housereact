// src/components/admin/Admin.jsx

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserForm from './UserForm';
import UserDelete from './UserDelete';

const Admin = () => {
  return (
    <div>
      <h1>Administration des Utilisateurs</h1>
      <Switch>
        <Route path="/admin/users" exact component={UserList} />
        <Route path="/admin/users/:id" exact component={UserDetail} />
        <Route path="/admin/users/create" exact component={UserForm} />
        <Route path="/admin/users/:id/edit" exact component={UserForm} />
        <Route path="/admin/users/:id/delete" exact component={UserDelete} />
      </Switch>
    </div>
  );
};

export default Admin;
