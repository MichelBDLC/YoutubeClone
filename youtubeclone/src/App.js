
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from './Components/Navbar'
import About from './Components/About'
import Home from "./Home/Home";

// import Youtube, { YouTubeProps, YouTubePlayer, YouTubeEvent }from "react-youtube";

function App() {
  return (
    // <div className="wrapper">
    //   <Router>
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
          // <Route path="/about" element={<About />} />
    //       <Route path="/videos/:id" element={<Video />} />

    //     </Routes>
    //     <Footer />
    //   </Router>
    <div className="App">
      
      <Home />
      
      {/* <header className="App-header">

      </header> */}
    </div>
  );
}

export default App;
