
import './App.css';
//import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import VideoAction from './Components/VideoAction';
import { Route, Routes } from 'react-router-dom';
import About from "./Components/About";
// import Cardvideo from './Components/Cardvideo';
// import Cardvideos from './Components/Cardvideos';

function App() {
  return (

    <div className="App">
      <Navbar />
      <br />
      <Search />
      <br />
     
    </div>
  );
}

export default App;
