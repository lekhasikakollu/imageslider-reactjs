
// import './ImageSlider.css';
import Axios from 'axios';
import React , {useState} from "react";

function ImageSlider() {

  const [image, setImage] = useState([]);
  const getImages = () => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
      setImage( image => [...image, response.data.slice(0,20)])
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getImages}>Click</button>
 
    {image.map((imgData) => {
            <img key={imgData.albumId} alt={imgData.title} src={imgData.url} /> 
        
        }
         
          )
    }
      
    </div>
  )
};

export default ImageSlider;


