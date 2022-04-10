import React from "react";
import "./App.css";
import FocusInput from "useRef/FocusInput";
import MutableRefs from "useRef/MutableRefs";
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <FocusInput />
    <MutableRefs />
  </div>
);

export default App;
