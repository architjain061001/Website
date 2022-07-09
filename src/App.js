import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/Pages/AboutMe';
import Education from './components/Pages/Education';
import Experience from './components/Pages/Experience';
import Publications from './components/Pages/Publications';
import ContactMe from './components/Pages/ContactMe';

 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<AboutMe/>} />
        <Route path='/education' exact element={<Education/>} />
        <Route path='/experience' exact element={<Experience/>} />
        <Route path='/publications' exact element={<Publications/>} />
        <Route path='/contact-me' exact element={<ContactMe/>} />
      </Routes>
    </Router>
    // <>
    //     <Navbar />  
    //     <AboutMe />
    //     <Education />
    //     <Experience />
    //     <Publications />
    //     <ContactMe />
    // </>
  );
}

export default App;
