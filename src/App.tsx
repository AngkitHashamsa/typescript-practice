import React from "react";
import "./App.css";
import Status from "components/Status";
import Container from "components/Container";
const App: React.FC = () => (
  <div className="App">
    <Status status="loading" />
    <Container
      styles={{ height: "50vh", border: "5px solid red", width: "80%" }}
    />
  </div>
);

export default App;
