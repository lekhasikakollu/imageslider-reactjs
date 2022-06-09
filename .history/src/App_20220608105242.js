
import './App.css';
import Axios from 'axios';
import React , {useState} from "react";

function App() {

  const [image, setImage] = useState("");
  const getJoke = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
      setImage(response.data.message);
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getJoke}>Click</button>
   
    </div>
  )
};

export default App;
