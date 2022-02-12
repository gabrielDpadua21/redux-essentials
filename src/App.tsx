import React, { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
       <h1>Redux essentials</h1>
       <div className="line">
         <Intervalo />
       </div>
       <div className="line">
          <Soma />
          <Media />
          <Sorteio />
       </div>
    </div>
  );
}

export default App;
