import React from "react";
import "./App.css";
import Status from "components/Status";
import Button from "components/Button";
import Input from "components/Input";
const App: React.FC = () => (
  <div className="App">
    <Status status="loading" />
    <Button title="hello" onClick={() => console.log(23)} type="submit" />
    <Input onChange={(e) => console.log("hello")} value="" />
  </div>
);

export default App;
