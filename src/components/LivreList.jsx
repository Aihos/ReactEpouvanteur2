// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const LivreList = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const livre = Data.livre;

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {livre.map(livre => (
          <li key={livre.id}>
           <button onClick={() => openPopup(livre)}>Voir détails <img src={livre.imgLivre} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivreList;
