
// import './ImageSlider.css';
import Axios from 'axios';
import React , {useState} from "react";

function ImageSlider() {

  const [image, setImage] = useState();
  const getImages = () => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
      setImage(image.push(response.data.slice(0,20)));
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getImages}>Click</button>
 
    {image.map((imgData) => { <img alt={imgData.title} src={imgData.url}></img> })
    }
      
    </div>
  )
};

export default ImageSlider;


