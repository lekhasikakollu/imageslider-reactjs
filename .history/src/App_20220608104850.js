
import './App.css';
import Axios from 'axios';

function App() {
  const getJoke = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
      console.log(response);
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
