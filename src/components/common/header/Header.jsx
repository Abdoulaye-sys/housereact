// Header.js
import React, { useState } from 'react';
import { nav } from '../../data/Data';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
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
            <li>
              <Link to='/login'>Connexion</Link>
            </li>
            <li>
              <Link to='/register'>Inscription</Link>
            </li>
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
