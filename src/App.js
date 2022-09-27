import './App.css';
import React, {useState} from 'react'
import Contact from "./pages/Contact"
import Gallery from './pages/Gallery';
import About from './pages/About';
import Nav from "./components/Nav"
import Home from './pages/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App