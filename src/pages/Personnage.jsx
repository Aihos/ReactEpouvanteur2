import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import Data from "../data.json";
import "../css/personnage.css";
import PersonnageList from "../components/PersonnageList";
import ImageSelector from "../components/ImageSelector";
import ImageFond from "../components/ImageFond";
import TestNavabarsympa from "../components/TestNavabarsympa";
function Personnage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const openPopup = (item) => {
      setSelectedItem(item);
    };
    return (
        <> <TestNavabarsympa />
                  {/* <Navbar /> */}
            <div className="flex">
             
                <main id="mainPerso" className="m-0 w-[100%] p-4 flex flex-col">
                <ImageFond imageId={9} />
                <div class="personae">
 <ImageFond  imageId={11} />
 <PersonnageList  openPopup={openPopup} />

                </div>
               
                </main>

            </div>
            {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setSelectedItem(null)}>
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

           
        </>
    );
}
export default Personnage;