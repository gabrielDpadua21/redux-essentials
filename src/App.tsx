import React, { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState<number>(10);
  const [max, setMax] = useState<number>(100);

  return (
    <div className="App">
       <h1>Redux essentials</h1>
       <div className="line">
         <Intervalo 
            min={min} max={max}
            onMinChange={setMin} onMaxChange={setMax} 
          />
       </div>
       <div className="line">
          <Soma min={min} max={max} />
          <Media min={min} max={max} />
          <Sorteio min={min} max={max} />
       </div>
    </div>
  );
}

export default App;
