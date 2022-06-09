
// import './ImageSlider.css';
import Axios from 'axios';
import React , {useState} from "react";

function ImageSlider() {

  const [image, setImage] = useState([]);
  const getImages = () => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
    //   setImage( image => [...image, response.data.slice(0,20)])
    const arr = (image) => [...image, response.data.slice(0,20)];
    console.log(arr)
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getImages}>Click</button>
 <img src={image[0].url}></img>
    
      
    </div>
  )
};

export default ImageSlider;


