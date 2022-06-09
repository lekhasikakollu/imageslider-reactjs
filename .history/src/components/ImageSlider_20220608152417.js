
// import './ImageSlider.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'


function ImageSlider() {

  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = image.length;
 
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
      <ChevronDoubleRightIcon></ChevronDoubleRightIcon>
      {image.map((imgData, index) => {
        return <img key={index} alt={imgData.title} src={imgData.url} />;
        }
       )}




    </div>
  )
};

export default ImageSlider;


