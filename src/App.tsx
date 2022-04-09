import React from "react";
import "./App.css";
import Box from "context/Box";
import { ThemeProvider } from "context/ThemeContext";
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <ThemeProvider>
      <Box />
    </ThemeProvider>
  </div>
);

export default App;
