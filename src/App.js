import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"; 
import ChartForBrazil from './components/Chart';


function App() {

  const [data,setData] = useState(false); 

  return (
    <div className="App">
      <ChartForBrazil />
    </div>
  );
}

export default App;
