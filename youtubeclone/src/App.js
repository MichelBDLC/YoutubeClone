import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from "./Components/About";
import NoRoute from './Components/NoRoute';
import './App.css';
import VideoAction from './Components/VideoAction';
import Search from './Components/Search';

function App() {
  return (

    <div>

      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/VideoAction' element={<VideoAction />} />
        <Route path='*' element={<NoRoute />} />
      </Routes>
    
    </div>
    
  )
}

export default App;
