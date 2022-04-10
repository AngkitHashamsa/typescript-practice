import React from "react";
import "./App.css";
import users from "__mock__/users";
import List from "generics/List";
const App: React.FC = () => (
  <div className="App">
    <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />
    <List items={users} onClick={(item) => console.log(item)} />
  </div>
);

export default App;
