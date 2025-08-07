
import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []); 
  return (
    <div className="App">
   <Header/>
   <Hero/>
   <About/>
   <Project/>
   <Resume/>
   <Contact/>
   
    </div>
  );
}

export default App;

