import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Components/Navbar'
import About from './Home/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />}  />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
