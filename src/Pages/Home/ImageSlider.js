import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../Css/ImageSlider.css";
function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const prevSlide = () => {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };
  const nextSlide = () => {
    if (imageIndex === imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  return (
    <div className="carousel" style={{ position: "relative" }}>
      <img
        className="sliderImage"
        src={imageUrls[imageIndex]}
        style={{height:'500px'}}
        alt="pictures of recent and upcoming slides"
      />
      <button onClick={prevSlide} className="slideButtonLeft">
        <ChevronLeft size={32} strokeWidth={3} absoluteStrokeWidth />
      </button>
      <button onClick={nextSlide} className="slideButtonRight">
        <ChevronRight size={32} strokeWidth={3} absoluteStrokeWidth />
      </button>
    </div>
  );
}
export default ImageSlider;
