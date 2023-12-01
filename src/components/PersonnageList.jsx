import React, { useState } from "react";
import Data from "../data.json";
import "../css/personnage.css";

const PersonnageList = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupId) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const persos = Data.persos;

  return (
    <div className="">
      <h2>Liste des utilisateurs</h2>
      <ul>
        {persos.map((perso) => (
          <li key={perso.id}>
            <button id={`popup-trigger${perso.id}`} onClick={() => openPopup(`popup-overlay${perso.id}`)}>
              <img src={perso.img} alt={perso.desc} id={perso.name} />
            </button>
            <div id={`popup-overlay${perso.id}`} style={{ display: activePopup === `popup-overlay${perso.id}` ? "block" : "none" }}>
              <div id={`popup${perso.id}`}>
                <h3>{perso.name}</h3>
                <p className="textepetit">{perso.desc}</p>
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

export default PersonnageList;