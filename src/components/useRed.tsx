import { useReducer } from "react";

export const UseRed = () => {
  type counterState = {
    count: number;
  };
  type counterAction = {
    type: string;
    payload: number;
  };
  const initialState = { count: 0 };
  const countReducer = (state: counterState, action: counterAction) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload };
      case "DECREMENT":
        return { ...state, count: state.count - action.payload };
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
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        -5
      </button>
    </div>
  );
};
