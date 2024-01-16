import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Hebergement from "../hebergement/hebergement";
import Admin from '../admin/Admin';
import Login from '../auth/Login'; // Ajout de la ligne pour la page de connexion
import Register from '../auth/Register'; // Ajout de la ligne pour la page d'inscription
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/hebergement' component={Hebergement} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} /> {/* Ajout de la route pour la page de connexion */}
          <Route path='/register' component={Register} /> {/* Ajout de la route pour la page d'inscription */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
