import './App.css';
//import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import VideoAction from './Components/VideoAction';
import { Route, Routes } from 'react-router-dom';
import About from "./Components/About";
// import Cardvideo from './Components/Cardvideo';
// import Cardvideos from './Components/Cardvideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import About from './Home/About'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path='/about' element={<About />}  />
        </Routes>
      </Router>


      <Navbar />
      <br />
      <Search />
      <br />
      {/* <Routes>
        <Route path='/App' element={<App />}> </Route>
      </Routes> */}
      {/* <Routes>
        <Route path='/' element={<App />} /> 
        <Route path="/.Components/About" element={<About />} />
        {/* <Route path="/.Components/VideoAction/:id" element={<VideoAction />} /> */}
      {/* </Routes>  */}
    </div>
  );
}

export default App;
