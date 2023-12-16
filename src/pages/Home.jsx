
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import "../css/accueil.css";
import VilleList from "../components/VilleList";   
import PersonnageList from "../components/PersonnageList";
import LivreList from "../components/LivreList";
import ImageList from "../components/ImageList";
import soleil from "../css/img/Accueil/soleil.png";
import Data from "../data.json";
import ImageSelector from "../components/ImageSelector";
import ImageFond from "../components/ImageFond";
import logo from "../css/img/Accueil/logohugo.png";
import { ParallaxBanner } from 'react-scroll-parallax';


function Home() {
    const [selectedItem, setSelectedItem] = useState(null);
    const images = Data.images;
const logoHugo = logo;
    const openPopup = (item) => {
      setSelectedItem(item);
    };
    return (
        <>
     
                  {/* <Navbar /> */}
            <div className="flex">
                <Navbar />
                <main id="mainHome" className="m-0 w-[100%] p-4 flex flex-col ">
                <ImageSelector id={1} />
                  <ImageSelector id={6} />
                <ImageFond imageId={4} />
                <div class="panneauNav">
                <ImageFond imageId={3} />
                 <Navbar   />

                </div>
               
                <div class="p2">
<h2>Explication</h2>
<p>Etant un grand fan de la série "L'épouvanteur" écrit par Joseph Delaney, 
j'ai décidé de créer un site pour montrer ma vision de cet univers et 
peut être donner l'envie à d'autre de lire cette série de 17 tomes +
 2 Hors-Séries. Deplus je souhaitais rendre hommage a celui qui est
  mon auteur préféré.</p>
<h2>Voir d'autres créations</h2>
<img src={logoHugo} alt="" />
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

 <Footer />
           
        </>
    );
}
export default Home;