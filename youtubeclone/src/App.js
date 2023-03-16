import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Nav  from './Components/Navbar'
import About from './Components/About'
import Home from "./Home/Home";
import Fetch from "./Api/Fetch";
import Youtube, { YouTubeProps, YouTubePlayer, YouTubeEvent }from "react-youtube";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <header className="App-header">

      </header> */}
    </div>
  );
}

export default App;
