import { useReducer } from "react";

export const UseRed = () => {
  type counterState = {
    count: number;
  };

  type incDecAction = {
    type: "INCREMENT" | "DECREMENT";
    payload: number;
  };

  type resetAction = {
    type: "RESET";
  };
  type counterAction = incDecAction | resetAction;

  const initialState = { count: 0 };
  const countReducer = (state: counterState, action: counterAction) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload };
      case "DECREMENT":
        return { ...state, count: state.count - action.payload };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        +10
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        -5
      </button>
    </div>
  );
};
