
// import './ImageSlider.css';
import Axios from 'axios';
import React , {useState} from "react";

function ImageSlider() {

  const [image, setImage] = useState("");
  const getImages = () => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
      setImage(response.data.message);
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getImages}>Click</button>
    {image.map((imgData) => {
        <img src={url}></img>
    })
    }
      
    </div>
  )
};

export default ImageSlider;


