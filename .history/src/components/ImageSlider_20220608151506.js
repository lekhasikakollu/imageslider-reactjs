
// import './ImageSlider.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function ImageSlider() {

  const [image, setImage] = useState([]);
 
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      const imgData = response.data.slice(0, 20);
      setImage(imgData)
      // const arr = (image) => [...image, response.data.slice(0,20)];
      console.log('useEffect')
    }
    );
  },[image])
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


