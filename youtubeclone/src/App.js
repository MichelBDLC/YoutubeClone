import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import About from './Components/About'
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
      <header className="App-header">
       <p> TEST </p>
      </header>
    </div>
  );
}

export default App;
