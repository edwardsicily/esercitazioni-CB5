import "./TodoList.scss";
import { ListItem } from "../listitem/ListItem";

const arr = [
  { key: 0, name: "zucchine", status: false },
  { key: 1, name: "patate", status: false },
  { key: 2, name: "carote", status: false },
  { key: 3, name: "pane", status: false },
  { key: 4, name: "biscotti", status: false },
  { key: 5, name: "latte", status: false },
];
export function TodoList() {
  return (
    <div className="wrapper">
      <h2>TODO LIST</h2>
      <ul>
        {arr.map((el) => {
          return <ListItem key={el.key} data={el} />;
        })}
      </ul>
    </div>
  );
}
