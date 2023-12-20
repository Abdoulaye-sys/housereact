import React from "react";

const HebergementCard = ({ logement }) => {
  const { title, description, nombre_chambres, nombre_lits, prix_nuit, type_logement } = logement;

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Nombre de chambres: {nombre_chambres}</p>
      <p>Nombre de lits: {nombre_lits}</p>
      <p>Prix par nuit: {prix_nuit}</p>
      <p>Type de logement: {type_logement}</p>
    </div>
  );
};

export default HebergementCard;
