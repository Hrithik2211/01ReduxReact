import React from 'react'
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { incNumber,decNumber } from './actions';

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Counter</h1>
      <div className="container">
        <h1>Increment/Decrement</h1>
        <h4>using React redux</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber(3))}
          ><span>-</span></a>
          <input name="quanitity" type="text" className='quantity_input' value={ myState} />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}
          ><span>+</span></a>
        </div>
      </div>
    </>
  );
}

export default App;
