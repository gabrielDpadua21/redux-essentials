import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Redux essentials</h1>
       <div className="line">
        <Card></Card>
        <Card></Card>
       </div>
    </div>
  );
}

export default App;
