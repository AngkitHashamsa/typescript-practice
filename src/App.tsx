import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Redux/reducer';
import { createAction } from 'Redux';
import { bindActionCreators } from 'redux';
const App: React.FC = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const { decrement, increment, reset } = bindActionCreators(createAction, dispatch);

  return (
    <div className="App">
      <h2>Base</h2>
      <h4>Count </h4>
      <p>{count}</p>
      <div>
        <button onClick={() => increment(200)}>increment</button>
        <button onClick={() => decrement(200)}>decrement</button>
        <button onClick={reset}>Rest</button>
      </div>
    </div>
  );
};

export default App;
