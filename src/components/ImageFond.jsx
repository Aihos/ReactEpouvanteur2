import React from "react";
import Data from "../data.json";

function ImageFond({ imageId }) {
  // Recherche de l'objet image dans le tableau d'images avec l'ID spécifié
  const image = Data.images.find((img) => img.id === imageId);

  // Vérification si l'image correspondante a été trouvée
  if (!image) {
    console.error(`Aucune image trouvée avec l'ID ${imageId}`);
    return null;
  }

  // Style pour la div avec l'image de fond
  const divStyle = {
    backgroundImage: `url(${image.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    minHeight: "250vh", // Ajustez la hauteur selon vos besoins
     
    // Ajoutez d'autres styles si nécessaire
  };

  return <div id={image.title} style={divStyle}></div>;
}

export default ImageFond;