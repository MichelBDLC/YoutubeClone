// ajv_branch
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Nav  from './Components/Navbar'
import About from './Components/About'

// Develop
import './App.css';
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
// ajv_branch
      <Router>
        <Nav />
        <Routes>
          <Route element={<About />} path='/about' />
        </Routes>
      </Router>
      <header className="App-header">
       <p> TEST </p>
      </header>

      <Home />
      {/* <header className="App-header">

      </header> */}
// Develop
    </div>
  );
}

export default App;
