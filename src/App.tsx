import React from 'react';
import Card from './components/Card';
import './App.css';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
       <h1>Redux essentials</h1>
       <div className="line">
         <Intervalo />
       </div>
       <div className="line">
       <Card title='card #01' color='blue'>
           content #01
        </Card>
        <Card title='card #02' color='green'>
           content #02
        </Card>
        <Card title='card #04' color='purple'>
          content #04
        </Card>
       </div>
    </div>
  );
}

export default App;
