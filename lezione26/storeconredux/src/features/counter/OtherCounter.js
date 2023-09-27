import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function OtherCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h3>OtherCounter</h3>
        <button
          aria-label="Aumenta"
          onClick={() => dispatch(increment())}
        >
          Aumenta
        </button>
        Questo contatore e il suo gemello valgono: <span>{count}</span>
        <button
          aria-label="Decrementa"
          onClick={() => dispatch(decrement())}
        >
          Decrementa
        </button>
      </div>
    </div>
  );
}

export default OtherCounter;