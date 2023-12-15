import React, { useState } from "react";
import Data from "../data.json";
import "../css/univers.css";

const InteractiveMap = ({ openPopup }) => {
  const [activePopup, setActivePopup] = useState(null);

  const openAreaPopup = (areaId) => {
    setActivePopup(areaId);
    openPopup(areaId); // Vous pouvez ajuster cette fonction selon vos besoins
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const imageWithAreas = Data.images.find((image) => image.id === 7);

  if (!imageWithAreas) {
    // Gérer le cas où l'image avec l'id 7 n'est pas trouvée
    return null;
  }
  const ville = Data.ville;

  return (
    <div>
      <img
        src={imageWithAreas.src}
        id={imageWithAreas.title}
        alt=""
        useMap="#test"
      />

      <map name="test">
        {imageWithAreas.areas.map((area) => (
          <area
            key={area.id}
            id={`popup-trigger${area.id}`}
            alt={area.alt}
            title={area.title}
            href={`#popup-overlay${area.id}`}
            shape="rect"
            coords={area.coords}
            onClick={() => openAreaPopup(`popup-overlay${area.id}`)}
          />
        ))}
      </map>

      {imageWithAreas.areas.map((area) => (
        <div
          key={area.id}
          id={`popup-overlay${area.id}`}
          style={{
            display:
              activePopup === `popup-overlay${area.id}` ? "block" : "none",
          }}
        >
          <div className="popupTextHistoire" id={`popup${area.id}`}>
            <h3>{area.title}</h3>
            <p className="textepetit">{area.desc}</p>
            <button className="choucroute" onClick={closePopup}>
              Fermer
            </button> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveMap;
