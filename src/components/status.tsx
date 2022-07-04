
type statusProp={
    status:"loading" | "data" | "error"
}

export const Status = ({status}:statusProp) => {
  return <div>{status}</div>;
};
