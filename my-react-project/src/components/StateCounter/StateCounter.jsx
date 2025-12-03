import React, { useState } from "react";
import './StateCounter.css'

const StateCounter = () => {
const [countNum, setcountNum] = useState(0);
const countIncrement = () => {
  setcountNum(countNum + 1)
}

const countDecrement = () => {
  setcountNum(countNum - 1)
}
const multiBy5 = () => {
  setcountNum(countNum * 5)
}
  return (
    <>
      <div className="stateCounterSection">
        <div className="container">
          <div className="topContent">
            <h2 className="heading">State Counter</h2>
            <p className="subHeading">
              A simple counter component using React state management.
            </p>
          </div>
          <div className="counterStates">
            <h2 className="stateCounterNumber">{countNum}</h2>
            <p className="stateCounterLabel">Current Count</p>
            <div className="buttonItems">
            <button className="decrement" onClick={countDecrement}>Decrement</button>
            <button className="increment" onClick={countIncrement}>Increment</button>
            <button className="multiBy5" onClick={multiBy5}>Multi By 5</button>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default StateCounter;
