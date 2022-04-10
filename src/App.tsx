import React from "react";
import "./App.css";
import Private from "auth/Private";
import Profile from "auth/Profile";
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <Private isLoggin={true} component={Profile} />
  </div>
);

export default App;
