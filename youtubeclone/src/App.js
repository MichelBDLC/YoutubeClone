import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import About from './Home/About'
import './App.css';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path='/about' element={<About />}  />
        </Routes>
      </Router>
      <Searchbar />


    </div>
  );
}

export default App;
