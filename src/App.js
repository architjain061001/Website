import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/Pages/AboutMe';
import Profile from './components/Pages/Profile';
import Projects from './components/Pages/Projects';
import Publications from './components/Pages/Publications';
import ContactMe from './components/Pages/ContactMe';

 

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' exact element={<AboutMe/>} />
        <Route path='/profile' exact element={<Profile/>} />
        <Route path='/projects' exact element={<Projects/>} />
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
