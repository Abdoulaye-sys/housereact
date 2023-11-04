import React from "react";
import img from "../images/pricing.jpg"; // Remplacez le chemin par votre propre image
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="Contactez-nous" title="Obtenez de l'aide et un support amical" cover={img} />
        <div className="container">
          <form className="shadow">
            <h4>Remplissez le formulaire</h4> <br />
            <div>
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="E-mail" />
            </div>
            <input type="text" placeholder="Sujet" />
            <textarea cols="30" rows="10" placeholder="Votre message"></textarea>
            <button>Envoyer la demande</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
