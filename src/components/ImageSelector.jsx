// ImageComponent.jsx
import React from "react";
import Data from "../data.json";

const ImageSelector = ({ id }) => {
  const images = Data.images;

  const getImageData = () => {
    const objetImage = images.find(image => image.id === id);
    return objetImage ? objetImage : null;
  };

  const imageData = getImageData();

  return imageData ? <img src={imageData.src} id={imageData.title} alt="" /> : <div>No image found</div>;
};

export default ImageSelector;
