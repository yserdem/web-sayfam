import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      <About />
      <Skills />
      <Profile />
    </div>
  );
};

export default App;
