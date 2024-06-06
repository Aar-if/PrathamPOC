import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Observation from "./components/Observation";
import Player from "./pages/Player";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/observation" element={<Observation />} /> 
          <Route path="/player" element={<Player />} /> 
        </Routes> 
      </Router>
    </div>
  );
}

export default App;