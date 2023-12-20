import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import Data from "../data.json";

const AudioPlayer = () => {
  const soundRef = useRef(null);
  const images = Data.images;
  const [maisonImage, setMaisonImage] = useState(null);
  const [isScreenAbove900px, setIsScreenAbove900px] = useState(window.innerWidth > 900);

  useEffect(() => {
    const getCurrentPage = () => window.location.pathname.replace('/', '');

    const audioData = {
      '/': 'https://dev.timmatane.ca/etudiants/2021/lerayh/ImageWardstone/musique/accueil.mp3',
      '/Univers': 'https://dev.timmatane.ca/etudiants/2021/lerayh/ImageWardstone/musique/univers.mp3',
      '/Histoire': 'https://dev.timmatane.ca/etudiants/2021/lerayh/ImageWardstone/musique/hitoire.mp3',
      '/Personnage': 'https://dev.timmatane.ca/etudiants/2021/lerayh/ImageWardstone/musique/persos.mp3',
    };

    const currentPage = getCurrentPage();
    const audioSrc = audioData[currentPage];

    if (audioSrc) {
      soundRef.current = new Howl({
        src: [audioSrc],
        loop: true,
        volume: 0.5,
      });

      // Commencez la lecture audio lorsque le composant est monté
      soundRef.current.play();

      // Arrêtez la lecture audio lorsque le composant est démonté
      return () => {
        soundRef.current.stop();
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    // Récupérer l'image avec le titre "Maison"
    const maisonImageData = images.find(img => img.title === "Maison");
    setMaisonImage(maisonImageData);
  }, [images]);

  useEffect(() => {
    // Mettre à jour l'état lorsque la taille d'écran change
    const handleResize = () => {
      setIsScreenAbove900px(window.innerWidth > 900);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Style pour la div en fonction de la taille d'écran
  const divStyle = {
    backgroundColor: '#87CEEB',
    color: '#000',
    padding: '10px',
    textAlign: 'center',
    display: isScreenAbove900px ? 'none' : 'block',
  };

  return (
    <div style={divStyle}>
      <p>Passez à une taille d'écran plus grande pour une meilleure expérience.</p>
      {maisonImage && <img src={maisonImage.src} alt={maisonImage.title} />}
    </div>
  );
};

export default AudioPlayer;
