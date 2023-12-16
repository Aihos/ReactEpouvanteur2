import React from "react";
import Data from "../data.json";
import "../css/univers.css";
import { useSpring, animated } from "@react-spring/web";

const ImageSelector = ({ id, openPopup }) => {
  const images = Data.images;
  const ville = Data.ville;

  const getImageData = () => {
    return images.find((image) => image.id === id);
  };

  const imageData = getImageData();

  const handleAreaClick = (areaId) => {
    const numericId = areaId.replace(/\D/g, '');
    const selectedVille = ville.find((v) => v.id === parseInt(numericId, 10));

    if (selectedVille) {
      openPopup(`popup-overlay${selectedVille.id}`);
    }
  };



  const imageStyles = {
    1: {
      position: 'absolute',
      height: '20rem',
      width: '20rem',
      top: '0%',
      left:  '90%', // Use the animated left property
      // additional styles for image with ID 1
    },
    4: {
      position: 'absolute',
      height: '40rem',
      width: '40rem',
      top: '0%',
      left: '30%',
      // additional styles for image with ID 2
    },
    6: {
      position: 'absolute',
      height: '40rem',
      width: '40rem',
      top: '90%',
      left: '30%',
      // additional styles for image with ID 2
    },
    // Add more styles for other image IDs as needed
  };

  return imageData ? (
    <>
      <animated.img
        src={imageData.src}
        id={imageData.title}
        alt=""
        useMap={imageData.id === 7 ? `#${imageData.mapName}` : undefined}
        onClick={() => handleAreaClick(`popup-trigger${imageData.id}`)}
        style={{ ...imageStyles[id] }}
      />
      {imageData.id === 7 && (
        <map name={imageData.mapName}>
          {imageData.areas.map((area) => (
            <area
              key={area.id}
              alt={area.alt}
              title={area.title}
              href={`#popup-overlay${area.id}`}
              shape={area.shape}
              coords={area.coords}
              onClick={() => handleAreaClick(area.id)}
            />
          ))}
        </map>
      )}
    </>
  ) : (
    <div>No image found</div>
  );
};

export default ImageSelector;
