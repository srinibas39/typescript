type greetListProp = {
  nameList: {
    first: string;
    last: string;
  }[];
};

export const GreetList = ({ nameList }: greetListProp) => {
  return (
    <ul>
      {nameList.map((el,idx) => {
        return <li key={idx}>{el.first + " " + el.last}</li>;
      })}
    </ul>
  );
};
