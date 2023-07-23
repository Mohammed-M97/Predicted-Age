import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [info, setInfo] = useState('')
  const [predictedInfo, setPredictedInfo] = useState(null)

  const fetchInfo = () => {
    Axios.get(`https://api.agify.io/?name=${info}`)
    .then((res) => setPredictedInfo(res.data))
  }
  return (
    <div className="App">
      <input placeholder='Name...' onChange={(name) => setInfo(name.target.value)} />

      <button onClick={fetchInfo}> Predicted info </button>

      <h1> name: {predictedInfo?.name} </h1>
      <h1> age: {predictedInfo?.age} </h1>
    </div>
    )
}



export default App;
