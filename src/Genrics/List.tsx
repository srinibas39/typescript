type ListProps<T> = {
  items: T[];
  onClick: (item: T) => void;
};

export const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, idx) => {
        return (
          <li key={item.id} onClick={() => onClick(item)}>
            {item.first + " " + item.last}
          </li>
        );
      })}
    </div>
  );
};
