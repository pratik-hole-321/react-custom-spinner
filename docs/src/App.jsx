import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadersGallery from "./pages/LoadersGallery";
import ReactMarkdown from "react-markdown";
import UsageContent from "./pages/Usage.md?raw";
import HomePage from "./pages/HomePage";
import "./App.css";
import Usage from "./pages/Usage";

function App() {
  return (
    <Router>
      <header className="navbar-section">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/usage">Usage</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/gallery" element={<LoadersGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
