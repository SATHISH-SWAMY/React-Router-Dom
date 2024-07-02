import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import your components here
import All from './components/pages/All';
import FullStackDevelopment from './components/pages/FullStackDeveloper';
import DataScience from './components/pages/DataScience';
import CyberSecurity from './components/pages/CyberSecurity';
import Career from './components/pages/Career';
import Footer from '../src/Footer';
import Header from '../src/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/all" />} />
          <Route path='/all' element={<All />} />
          <Route path='/fullStackDevelopment' element={<FullStackDevelopment />} />
          <Route path='/dataScience' element={<DataScience />} />
          <Route path='/cyberSecurity' element={<CyberSecurity />} />
          <Route path='/career' element={<Career />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
