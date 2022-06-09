
// import './ImageSlider.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/solid'


function ImageSlider() {

  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = image.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length-1 ? 0 : currentSlide+1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length-1 : currentSlide-1);
  };

  console.log(currentSlide);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      const imgData = response.data.slice(0, 20);
      setImage(imgData)
      console.log('useEffect')
    }
    );
  }, []);
  
  if(!Array.isArray(image) || image.length <= 0) return null;

  return (
    <section className="flex flex-row justify-center items-center p-40 static border-red-600">
      <ChevronDoubleLeftIcon 
      className="w-10 h-10 absolute left-10 top-[500px] cursor-pointer z-10" 
      onClick={prevSlide}/>

      {image.map((imgData, index) => {
        return (
          <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
          {index === currentSlide && 
            <img  alt={imgData.title} 
            src={imgData.url} 
            className="w-100 h-100 rounded transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
        }
          </div>

        );
      }
      )}
      <ChevronDoubleRightIcon 
      className="w-10 h-10 absolute right-10 top-[500px] cursor-pointer z-10"
      onClick={nextSlide} />



    </section>
  )
};

export default ImageSlider;


