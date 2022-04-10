type Props<T> = {
  items: T[];
  onClick: (value: T) => void;
};
interface User {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const List = <T extends string | number | User>({ items, onClick }: Props<T>) => (
  <div>
    <h2>List of items</h2>
    {items.map((item, index) => (
      <div key={typeof item === "object" ? item?.id : index} onClick={() => onClick(item)}>
        {typeof item === "object" && (
          <div>
            <h2>{item?.title}</h2>
          </div>
        )}
        {typeof item === "object" ? item?.body : item}
      </div>
    ))}
  </div>
);

export default List;
