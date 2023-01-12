import React, { useReducer } from "react";
import "./counter.css";

function counter(state, { type, payload = 1 }) {
  console.log(state, type, payload);
  if (type === "increment") {
    return { count: state.count + payload };
  }
  if (type === "decrement") return { count: state.count - payload };
  if (type === "reset") return { count: 0 };
  throw Error("Unknown Action");
}
function Counter() {
  const [state, dispatch] = useReducer(counter, { count: 0 });

  return (
    <div>
      <div className="counter-main">
        <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
          -2
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        <div className="result">{state.count}</div>
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
          2
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
    </div>
  );
}

export default Counter;
