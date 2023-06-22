import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/action';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div id='main'>
      <button onClick={handleIncrement}>+</button>
      <span data-testid='counter'>{counter}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
