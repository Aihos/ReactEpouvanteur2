// Exemple : src/components/UserList.js
import React from "react";
import Data from "../data.json";
import "../css/main.css";


const ImageList = () => {
  // Utilisez les données comme bon vous semble
 /*  const images = Data.images; */
 const images = Data.images;
  console.log(images); // Ajoutez cette ligne pour vérifier les données dans la console
  return (
    <div>
    
      <ul>
        {images.map(images => (
          <li key={images.id}>
  <img src={images.src} alt={images.title}/>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
