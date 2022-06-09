
// import './ImageSlider.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { ChevronDoubleRightIcon,ChevronDoubleLeftIcon } from '@heroicons/react/solid'


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
    <section className="flex flex-col">
    <ChevronDoubleRightIcon className="w-5 h-5"/>
      
      {image.map((imgData, index) => {
        return <img key={index} alt={imgData.title} src={imgData.url} />;
        }
       )}
       <ChevronDoubleRightIcon className="w-5 h-5" />



    </section>
  )
};

export default ImageSlider;


