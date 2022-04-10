import React from 'react';
import './App.css';
import Typography from 'polymorpism/Typography';
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <Typography size="lg" component="p">
      hello
    </Typography>
    <Typography size="md" component="h2">
      hi
    </Typography>
    <Typography size="lg" component="h4">
      my
    </Typography>
  </div>
);

export default App;
