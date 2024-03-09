import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Card from './Card';
import Carousel from './Carousel';

function App() {

  return (
    <div>
      <Navbar />  
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
