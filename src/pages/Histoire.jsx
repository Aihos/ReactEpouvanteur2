import React, { useState } from "react";
import "../css/histoire.css";
import Footer from "../components/Footer";
 import Navbar from "../components/Navbar"; 
 import LivreList from "../components/LivreList";
 import Data from "../data.json";
 import ImageSelector from "../components/ImageSelector";
 import ImageFond from "../components/ImageFond";
 import TestNavabarsympa from "../components/TestNavabarsympa";
function Histoire() {
    const [selectedItem, setSelectedItem] = useState(null);

    const openPopup = (item) => {
      setSelectedItem(item);
    };
    return (
        <> <TestNavabarsympa />
                  {/* <Navbar /> */}
            <div className="flex">
              
                <main id="mainHistoire" className="m-0 w-[100%] p-4 flex flex-col">
                <ImageFond imageId={8} />
              
                        <LivreList  openPopup={openPopup} />
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
export default Histoire;