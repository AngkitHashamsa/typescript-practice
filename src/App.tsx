import React from 'react';
import './App.css';
import RandomNumber from 'RestrictedProps/RandomNumber';
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <RandomNumber value={-10} isNegative />
  </div>
);

export default App;
