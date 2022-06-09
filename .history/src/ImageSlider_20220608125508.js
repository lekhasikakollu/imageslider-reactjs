
// import './ImageSlider.css';
import Axios from 'axios';
import React , {useState} from "react";

function ImageSlider() {

  const [image, setImage] = useState("");
  const getImages = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
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
