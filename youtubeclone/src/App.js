import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Nav  from './Components/Navbar'
import About from './Components/About'

import './App.css';
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Nav />
        <Routes>
          <Route element={<About />} path='/about' />
        </Routes>
      </Router> */}
      <Home />
    </div>
  );
}

export default App;
