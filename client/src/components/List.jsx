import ListItem from "./ListItem";

function List({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </ul>
  );
}

export default List;
