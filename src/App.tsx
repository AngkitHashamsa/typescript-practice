import React from "react";
import "./App.css";
import Status from "components/Status";
import User from "components/State/user";
const App: React.FC = () => (
  <div className="App">
    <Status status="loading" />
    <User />
  </div>
);

export default App;
