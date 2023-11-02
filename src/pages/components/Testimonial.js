import React from 'react'
import './testimonial.css';
import { useState,useEffect } from 'react';
const Testimonial = () => {
    const totalImages = 9; // Total number of images
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
    <div className="mil-p-90-60 logo-carousel2 container  mil-partners-frame">
      {[...Array(3)].map((_, index) => {
        const imageNumber = (currentImage + index) % totalImages || totalImages;
        return (
          <div className="logo-container2 " key={index}>
            <img
              src={`/assets/img/${imageNumber}.png`}
              alt={`Logo ${imageNumber}`}
              className="logo-image2"
              style={{ opacity: index === 1 ? 1 : 1 }} // Set opacity to create fade effect
            />
          </div>
        );
      })}
    </div>
  )
}

export default Testimonial