import React, { useContext } from "react";
import  {MainContext } from "../Context/MainContext";

function CounterController() {
  const [count, setCount] = useContext(MainContext);
  function increse() {
    setCount(count + 1);
  }
  function decrese() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increse}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );
}

export default CounterController;
