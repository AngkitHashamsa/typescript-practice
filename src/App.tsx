import React from 'react';
import './App.css';
import Button from 'html/Button';
import Input from 'html/Input';
const App: React.FC = () => (
  <div className="App">
    <Button variant="outline" type="button" onClick={() => console.log('hello')}>
      hello
    </Button>
    <Input type={'number'} />
  </div>
);

export default App;
