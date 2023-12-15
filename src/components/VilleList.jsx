// Exemple : src/components/UserList.js
import React, { useState } from "react";
import Data from "../data.json";
import "../css/univers.css";

const VilleList = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupId) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const ville = Data.ville;

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {ville.map((ville) => (
          <li key={ville.id}>
            <button
              id={`popup-trigger${ville.id}`}
              onClick={() => openPopup(`popup-overlay${ville.id}`)}
            >
              {ville.name}
            </button>

            <div
              id={`popup-overlay${ville.id}`}
              style={{
                display:
                  activePopup === `popup-overlay${ville.id}` ? "block" : "none",
              }}
            >
              <div className="popupTextHistoire" id={`popup${ville.id}`}>
                <h3>{ville.name}</h3>
                <p className="textepetit">{ville.desc}</p>
                <button className="choucroute" onClick={closePopup}>
                  Fermer
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VilleList;
