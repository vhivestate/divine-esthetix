import './App.css';
import React from 'react'
import Book from "./pages/Book"
import Gallery from './pages/Gallery';
import About from './pages/About';
import Nav from "./components/Nav"
import Home from './pages/Home';
import Footer from './components/Footer';
import FAQs from './pages/FAQs'
import Services from './pages/Services'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App