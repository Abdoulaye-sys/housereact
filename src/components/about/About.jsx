import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import aboutImg from "../images/about.jpg"; // Remplacez le chemin par votre propre image
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="Qui sommes-nous" title="Qui sommes-nous ?" cover={aboutImg} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Notre Histoire" subtitle="Découvrez notre parcours et notre processus de travail" />

            <p>
              Chez Atypik House, nous sommes passionnés par la création de séjours exceptionnels pour nos clients. Notre histoire est celle d'une équipe dévouée qui repousse constamment les limites pour offrir des expériences de voyage uniques. Nous sommes fiers de notre approche innovante et de notre engagement envers l'originalité.
            </p>
            <p>
              Notre équipe diversifiée est composée d'experts en hébergement atypique, de créatifs enthousiastes et d'explorateurs aguerris. Nous mettons tout en œuvre pour vous offrir des séjours inoubliables, que ce soit dans une cabane perchée, une bulle sous les étoiles ou d'autres hébergements originaux.
            </p>
            <button className="btn2">En savoir plus sur nous</button>
          </div>
          <div className="right row">
            <img src={aboutImg} alt="Notre équipe" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
