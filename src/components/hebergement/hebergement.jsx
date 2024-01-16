import React, { useState, useEffect } from "react";
import axios from "axios";
import Heading from "../common/Heading";
import "./hebergement.css";
import HebergementCard from "./HebergementCard";

const Hebergement = () => {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/logements');
        console.log('Réponse de l\'API:', response.data); // Ajoutez cette ligne
        setLogements(response.data['hydra:member']);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des logements', error);
        setError('Une erreur s\'est produite lors de la récupération des logements. Veuillez réessayer plus tard.');
        setLogements([]);
      }
    };
    

    fetchLogements();
  }, []);

  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Nos hébergements' subtitle='Découvrez nos hébergements uniques et préparez-vous à vivre des moments mémorables. Chez Atypik House, nous transformons vos rêves de voyage en réalité.' />

          {/* Utilisez les logements récupérés ici, par exemple, affichez-les dans une liste */}
          <div className="logements-list">
            {logements.map(logement => (
              <HebergementCard key={logement.id} logement={logement} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hebergement;