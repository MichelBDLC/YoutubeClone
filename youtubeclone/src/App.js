import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home/Home";

function App() {
  return (
    // <div className="wrapper">
    //   <Router>
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
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
