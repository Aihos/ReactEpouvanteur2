import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/accueil.css";
import Data from "../data.json";
import ImageSelector from "../components/ImageSelector";
import ImageFond from "../components/ImageFond";
import logo from "../css/img/Accueil/logohugo.png";
import PanneauNavbar from "../components/PanneauNavbar";
import { Parallax, ParallaxLayer  } from "@react-spring/parallax";
import { useSpring, animated } from '@react-spring/web';
import { ParallaxProvider } from "react-scroll-parallax";
import TestNavabarsympa from "../components/TestNavabarsympa";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const logoHugo = logo;
  const openPopup = (item) => {
    setSelectedItem(item);
  };
 
  return (
    <>  <TestNavabarsympa />
      <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">
        <div className="flex">
        
          <main id="mainHome" className="m-0 w-[100%] p-4 flex flex-col ">
            <ParallaxLayer offset={0} speed={0.2}  style={{  height: '20rem',  }}>
              <ImageSelector id={1} openPopup={openPopup} />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.15} style={{  height: '20rem', transform: 'translate3d(0px, 0px)' }} >
              <ImageSelector id={6} openPopup={openPopup} />
            </ParallaxLayer>

           
              <ImageFond imageId={4} />
           
            
              <div className="panneauNav">
                <ImageFond imageId={3} />
                <PanneauNavbar />
              </div>
             
            
              <div className="p2">
                <h2>Explication</h2>
                <p>
                Étant un grand fan de la série
                 'L'Épouvanteur' écrite par Joseph Delaney,
                  j'ai décidé de créer un site pour partager 
                  ma vision de cet univers et peut-être donner 
                  l'envie à d'autres de lire cette série de 17
                   tomes, plus 2 hors-séries. De plus, je souhaitais
                    rendre hommage à mon auteur préféré.
                </p>
                <h2>Voir d'autres créations</h2>
                <a href="https://hugo-leray-portfolio.netlify.app/">
                  <img src={logoHugo} alt="" />
                </a>
              </div>
          
          </main>
        </div>
      </Parallax>
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

export default Home;