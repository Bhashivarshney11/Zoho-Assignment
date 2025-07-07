// src/App.jsx
import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Left />
        <Right />
      </div>
      <Footer />
    </>
  );
}

export default App;
