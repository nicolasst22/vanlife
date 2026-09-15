import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
<BrowserRouter>
    
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={<div>404</div>} /> 
  </Routes>
  <Footer />
</BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
);