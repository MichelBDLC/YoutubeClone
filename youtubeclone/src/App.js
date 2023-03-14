import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Nav  from './Components/Navbar'
import About from './Components/About'
import './App.css';
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <header className="App-header">

      </header> */}
      <Router>
        <Nav />
        <Routes>
          <Route element={<About />} path='/about' />
        </Routes>
      </Router>
      <header className="App-header">
       <p> TEST </p>
      </header>
    </div>
  );
}

export default App;
