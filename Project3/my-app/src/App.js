import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Avatar from './pages/Avatar/Avatar';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation /> {}
      <Routes>
        <Route path="/" element={<Avatar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
