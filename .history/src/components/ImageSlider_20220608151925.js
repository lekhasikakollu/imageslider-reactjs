
// import './ImageSlider.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function ImageSlider() {

  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = slides.length;
 
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      const imgData = response.data.slice(0, 20);
      setImage(imgData)
      console.log('useEffect')
    }
    );
  }, []);
  return (
    <div>
      
      {image.map((imgData, index) => {
        return <img key={index} alt={imgData.title} src={imgData.url} />;
        }
       )}




    </div>
  )
};

export default ImageSlider;


