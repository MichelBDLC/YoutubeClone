import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Nav  from './Components/Navbar'
import About from './Components/About'
import './App.css';
import Home from "./Home/Home";
import Fetch from "./Api/Fetch";
import Youtube, { YouTubeProps, YouTubePlayer, YouTubeEvent }from "react-youtube";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Nav />
        <Routes>
          <Route element={<About />} path='/about' />
        </Routes>
      </Router> */}
      <Home Youtube={Youtube} />
    </div>
  );
}

export default App;
