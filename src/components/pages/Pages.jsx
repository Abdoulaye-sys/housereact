// Pages.jsx
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
import Login from '../auth/Login';
import Register from '../auth/Register';
import { AuthProvider } from '../auth/AuthContext'; // Importez le contexte d'authentification

const Pages = () => {
  return (
    <AuthProvider> {/* Ajoutez AuthProvider autour de votre Router */}
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/hebergement' component={Hebergement} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default Pages;
