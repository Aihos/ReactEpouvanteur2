// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";

const PersonnageList = ({ openPopup }) => {
  // Utilisez les données comme bon vous semble
  const persos = Data.persos;

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {persos.map(persos => (
          <li key={persos.id}>
           <button onClick={() => openPopup(persos)}>Voir détails <img src={persos.img} alt="" />
           </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonnageList;
