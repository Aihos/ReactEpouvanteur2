import React, { useState } from "react";
import Data from "../data.json";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import VilleList from "../components/VilleList";
import ImageSelector from "../components/ImageSelector";
import "../css/univers.css";


function Univers() {
  const ville = Data.ville;
  const images = Data.images; 
  
    const [selectedItem, setSelectedItem] = useState(null);
console.log(images);
    const openPopup = (item) => {
      setSelectedItem(item);
    };


    return (
        <>
                  {/* <Navbar /> */}
            <div className="flex">
                <Navbar />
                <main id="mainUnivers" className="m-0 w-[100%] p-4 flex flex-col">
{/*                   <img src={images.id = 6} alt="" /> 
 */}                 {/*  <img src={getSrc(7)} alt="" /> */}
 <h1 className="my-8">Univers</h1>
 <ImageSelector id={7} />

 <div class="partie2">
                    <h2>Infos Pratique</h2>
                    <p>Le comté prends son inspiration de la grande bretagne, 
                      elle est situé dans un temps moyennageux ou les ténébres
                       arpentres les vastes contrées verdoyantes du Comté et des
                        bord des villages et des villes très rustiques.</p>
                        <p>L'Auteur a pris aussi comme insipiration certaines villes et lieux qui existent déja tel fut le cas pour Pendle et la Tour Malkin</p>
             <h3>Annecdotes</h3>
               <VilleList  openPopup={openPopup} /></div>
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
 <Footer />
           
        </>
    )
}
export default Univers;