type ButtonProps = {
  handleClick: (e: React.MouseEvent, id: number) => void;
};

export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <>
      <h1>This is a button event</h1>
      <button onClick={(e) => handleClick(e, 1)}>Click me</button>
    </>
  );
};
