import logo from './logo.svg';
import './App.css';

function App() {
  const getJoke = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
      console.log(response);
    }
    );
  };
  return(
    <div>
      Click for dog message: <button onClick={getJoke}></button>
    </div>
  )
};

export default App;
