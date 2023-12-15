// Exemple : src/components/UserList.js
import React, { useState } from "react";
import Data from "../data.json";
import "../css/histoire.css";

const LivreList = () => {
  const [activePopup, setActivePopup] = useState(null);


  const openPopup = (popupId) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const livre = Data.livre;

  return (
    <div className="">
      <h2>Liste des utilisateurs</h2>
      <ul>
        {livre.map((livre) => (
          <li key={livre.id}>
            <button id={`popup-trigger${livre.id}`} onClick={() => openPopup(`popup-overlay${livre.id}`)}>
              <img src={livre.imgLivre} alt={livre.desc} id={livre.name} />
            </button>
            <div id={`popup-overlay${livre.id}`} style={{ display: activePopup === `popup-overlay${livre.id}` ? "block" : "none" }}>
              <div class="popupTextHistoire" id={`popup${livre.id}`}>
                <h3>{livre.name}</h3>
                <p className="textepetit">{livre.desc}</p>
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

export default LivreList;
