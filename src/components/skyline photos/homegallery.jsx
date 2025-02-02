import React, { useState } from 'react';
import images from '../../utils/skyImages'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const photos = [
    {
        src: images['../assets/Skyline Photos/skyline.jpg']?.default || '',
        width: 4032,
        height: 3024
    },
    {
        src: images['../assets/Skyline Photos/skyline 2.jpg']?.default || '',
        width: 4032,
        height: 3024
    },
    {
        src: images['../assets/Skyline Photos/skyline 3.jpg']?.default || '',
        width: 4032,
        height: 3024
    },
    {
        src: images['../assets/Skyline Photos/skyline 4.jpg']?.default || '',
        width: 4032,
        height: 3024
    },
    {
        src: images['../assets/Skyline Photos/skyline 5.jpg']?.default || '',
        width: 4032,
        height: 3024
    },
    {
        src: images['../assets/Skyline Photos/skyline 6.jpg']?.default || '',
        width: 4032,
        height: 3024
    }
]
const HomePhotoGallery = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const handlePrevious = () => {
      setCurrentPhotoIndex((prevIndex) => Math.max(0, prevIndex - (window.innerWidth <= 320 ? 1 : 6)));
  };
  
  const handleNext = () => {
      setCurrentPhotoIndex((prevIndex) => Math.min(photos.length - 1, prevIndex + (window.innerWidth <= 320 ? 1 : 6)));
  };
  
      const visiblePhotos = photos.slice(currentPhotoIndex, currentPhotoIndex + 6);
    return (
        <div className="gallery-container">
        <h2 className="photo-note">OUR WORK</h2>
        <div className="gallery">
          {visiblePhotos.map((photo, index) => (
            <div className="gallery-item" key={index}>
              <img src={photo.src} alt={`Photo ${index}`} />
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          {currentPhotoIndex > 0 && (
            <button className="gallery-navigation-arrow-left" onClick={handlePrevious}>
              <FaArrowLeft />
            </button>
          )}
          {currentPhotoIndex + 2 < photos.length && (
            <button className="gallery-navigation-arrow-right" onClick={handleNext}>
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    )
}
export default HomePhotoGallery;
