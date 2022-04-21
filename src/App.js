import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
