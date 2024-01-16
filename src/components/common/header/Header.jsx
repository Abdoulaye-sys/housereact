// Header.jsx
import React, { useState } from 'react';
import { nav } from '../../data/Data';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'; // Importez useAuth depuis AuthContext
import './header.css';

const Header = () => {
  const { authState, signOut } = useAuth(); 
  console.log('authState:', authState);// Utilisez useAuth pour accéder à l'état d'authentification

  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className='container flex'>
        <div className='logo'>
          <img src='./images/logo1.png' alt='' />
        </div>
        <div className='nav'>
          <ul className={navList ? 'small' : 'flex'}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
            {authState ? (
              <li>
                <button onClick={signOut}>Déconnexion</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to='/login'>Connexion</Link>
                </li>
                <li>
                  <Link to='/register'>Inscription</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className='toggle'>
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
