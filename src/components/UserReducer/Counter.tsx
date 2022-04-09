import { useReducer } from "react";
interface CounterState {
  count: number;
}

interface updateIncrement {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
}
interface ReserAction {
  type: "RESET";
}
type counterAction = updateIncrement | ReserAction;

const initialState: CounterState = {
  count: 0,
};

const reducer = (state: CounterState, action: counterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action?.payload };
    case "DECREMENT":
      if (state.count === 0) return { ...state, count: 0 };
      return { ...state, count: state.count - action?.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count : {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
          Increment 10
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

        <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
          Decrement 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
