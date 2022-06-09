
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { UNSPLASH_PUBLIC_CLIENT_ID } from "../lib/unsplash.js";

function ImageSlider() {

  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = image.length;
  const clientID = UNSPLASH_PUBLIC_CLIENT_ID;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  console.log(currentSlide);

  useEffect(() => {
    Axios.get("https://api.unsplash.com/search/collections?page=1&query=coffee&orientation=squarish&client_id=" + clientID).then((response) => {
      console.log(response.data.results);
      // const imgData = response.data.slice(0, 20);
      setImage(response.data.results)
      console.log('useEffect')
    }
    );
  }, []);

  if (!Array.isArray(image) || image.length <= 0) return null;

  return (
    <section className="grid grid-cols-3 p-28 min-h-screen relative">
    <div></div>  
    <div className="place-self-center">
      <ChevronDoubleLeftIcon
        className="w-10 h-10 absolute left-10 top-1/2 cursor-pointer z-10"
        onClick={prevSlide} />
      {image.map((imgData, index) => {
        return (
          <div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
            {index === currentSlide &&
              <img alt={imgData.title}
                src={imgData.cover_photo.urls.small}
                className="rounded"
              />
            }
          </div>

        );
      }
      )}
      <ChevronDoubleRightIcon
        className="w-10 h-10 absolute right-10 top-1/2 cursor-pointer z-10"
        onClick={nextSlide} />
        </div>
<div></div>

    </section>
  )
};

export default ImageSlider;


