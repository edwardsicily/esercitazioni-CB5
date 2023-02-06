import React from "react";
import { useReducer } from "react";
import "./styles/counter.scss";

function Counter() {
  const reducer = (state, action) => {
    if (action.type === "increment") {
      console.log("increment");
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    } else {
      throw new Error("Something went wrong");
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="counter-wrapper">
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <h4>{state.count}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </div>
  );
}

export default Counter;
