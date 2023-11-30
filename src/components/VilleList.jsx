// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const VilleList = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const ville = Data.ville;

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {ville.map(ville => (
          <li key={ville.id}>
           <button onClick={() => openPopup(ville)}> {ville.name} <h3/> 
           </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VilleList;
