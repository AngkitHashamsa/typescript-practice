import "./App.css";
import { Counter } from "Components/Counter";
const App: React.FC = () => (
  <div className="App">
    <h2>Base</h2>
    <Counter message="timer" />
  </div>
);

export default App;
