import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { incrementDva, decrementDva } from "./counterSliceDva";
// import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const countDva = useSelector((state) => state.counterDva.valueDva);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          aria-label="Increment valueDva"
          onClick={() => dispatch(incrementDva())}
        >
          IncrementDva
        </button>
        <span>{countDva}</span>
        <button
          aria-label="Decrement valueDva"
          onClick={() => dispatch(decrementDva())}
        >
          DecrementDva
        </button>
      </div>
    </div>
  );
};

export default Counter;
