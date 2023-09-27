import "../index.css";

import { useReducer, useEffect, useRef } from "react";

const initialState = {
  isRunning: false,
  time: 0,
  mario: "dorme"
};

export default function StopWatch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="stopwatch">
      {state.time}s
      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "tick" })}>Tick</button>
      </div>
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true, mario:"corre" };
    case "stop":
      return { ...state, isRunning: false, mario:"fermo" };
    case "reset":
      return { isRunning: false, time: 0, mario:"sonnecchia" };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}
