
// import './ImageSlider.css';
import Axios from 'axios';
import React , {useState} from "react";

function ImageSlider() {

  const [image, setImage] = useState("");
  const getImages = () => {
    Axios.get("https://api.gettyimages.com/v3/search/images/creative").then((response)=>{
      setImage(response.data.message);
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getImages}>Click</button>
    <img src={image}></img>
    </div>
  )
};

export default ImageSlider;


