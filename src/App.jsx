import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import JoinUs from "./pages/JoinUs";
import "./index.css"; // Import the CSS file here

const App = () => {
  return (
    <BrowserRouter basename="/fecade-new">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
