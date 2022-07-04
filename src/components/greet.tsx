type greetProps = {
  name: {
    first: string;
    last: string;
  };
  count: number;
  isLoggedin: boolean;
};

export const Greet = ({ name, count, isLoggedin }: greetProps) => {
  return (
    <>
      {!isLoggedin ? (
        <div>Welcome guest</div>
      ) : (
        <div>
          Welcome {name.first + " " + name.last} . You have {count} unread
          messages
        </div>
      )}
    </>
  );
};
