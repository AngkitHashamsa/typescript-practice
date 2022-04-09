import React from "react";
import "./App.css";
import User from "context/User";
import { UserProvider } from "context/UserContext";
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <UserProvider>
      <User />
    </UserProvider>
  </div>
);

export default App;
