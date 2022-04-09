import React from "react";
import "./App.css";
import Status from "components/Status";
import TypeAssertion from "components/State/TypeAssertion";
const App: React.FC = () => (
  <div className="App">
    <Status status="loading" />
    <TypeAssertion />
  </div>
);

export default App;
