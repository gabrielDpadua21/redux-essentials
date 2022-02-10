import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Redux essentials</h1>
       <div className="line">
        <Card title='card #01' color='blue'>
           content #01
        </Card>
        <Card title='card #02' color='green'>
           content #02
        </Card>
       </div>
       <div className="line">
        <Card title='card #03'>
          content #03
        </Card>
        <Card title='card #04' color='purple'>
          content #04
        </Card>
       </div>
    </div>
  );
}

export default App;
