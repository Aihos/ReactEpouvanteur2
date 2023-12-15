// Univers.jsx

import React, { useState } from "react";
import Data from "../data.json";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VilleList from "../components/VilleList";
import ImageSelector from "../components/ImageSelector";
import InteractiveMap from "../components/InteractiveMap";
import "../css/univers.css";

function Univers() {
  const ville = Data.ville;
  const images = Data.images;

  const [selectedItem, setSelectedItem] = useState(null);

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const handleAreaClick = (area) => {
    openPopup(`popup-overlay${area.id}`);
  };

  return (
    <>
      <div className="flex">
        <Navbar />
        <main id="mainUnivers" className="m-0 w-[100%] p-4 flex flex-col">
          <h1 className="my-8">Univers</h1>
{/*           <ImageSelector id={7} openPopup={handleAreaClick} />
 */}

          <InteractiveMap openPopup={handleAreaClick} />

          
          <div className="partie2">
            <h2>Infos Pratique</h2>
            <p>
              Le comté prend son inspiration de la Grande-Bretagne, elle est
              située dans une période moyenâgeuse où les ténèbres arpentent les
              vastes contrées verdoyantes du Comté et des bords des villages et
              des villes très rustiques.
            </p>
            <p>
              L'auteur a pris aussi comme inspiration certaines villes et lieux
              qui existent déjà, tel fut le cas pour Pendle et la Tour Malkin
            </p>
            <h3>Anecdotes</h3>
            <VilleList openPopup={openPopup} />
          </div>
        </main>
      </div>
      {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            {selectedItem && (
              <>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.desc}</p>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Univers;
