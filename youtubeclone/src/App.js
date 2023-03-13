import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Nav  from './Components/Nav'
import About from './Components/About'
import './App.css';

function App() {
  return (
    <div className="App">
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
