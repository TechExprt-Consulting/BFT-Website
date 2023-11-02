import React from "react";
import "./partner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
const Partner = () => {
  
  const totalImages = 7; // Total number of images
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage % totalImages) + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mil-p-90-60 logo-carousel container col-md-12">
      {[...Array(3)].map((_, index) => {
        const imageNumber = (currentImage + index) % totalImages || totalImages;
        return (
          <div className="logo-container col-md-4" key={index}>
            <img
              src={`/assets/partner/${imageNumber}.png`}
              alt={`Logo ${imageNumber}`}
              className="logo-image"
              style={{ opacity: index === 1 ? 1 : 1 }} // Set opacity to create fade effect
            />
          </div>
        );
      })}
    </div>
  );
};

export default Partner;
