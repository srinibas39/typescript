import { Greet } from "../components/greet";

export const CustButton = (props:React.ComponentProps<typeof Greet>) => {
  return <button>{props.count}</button>;
};
