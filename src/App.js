import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/Pages/AboutMe';
import Profile from './components/Pages/Profile';
import Projects from './components/Pages/Projects';
import Publications from './components/Pages/Publications';
import ContactMe from './components/Pages/ContactMe';
import LoadingScreen from './components/LoadingScreen';

 

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])

  return (
    <Router>
      <Navbar />
      {
        loading ? 
          <LoadingScreen />
          :
        <Routes>
          <Route path='/' exact element={<AboutMe/>} />
          <Route path='/profile' exact element={<Profile/>} />
          <Route path='/projects' exact element={<Projects/>} />
          <Route path='/publications' exact element={<Publications/>} />
          <Route path='/contact-me' exact element={<ContactMe/>} />
        </Routes>
      }
    </Router>
  );
}

export default App;
