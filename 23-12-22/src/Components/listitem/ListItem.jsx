import "./ListItem.scss";
import { useState } from "react";

export function ListItem(props) {
  console.log(props.data);
  const data = props.data;
  const [status, setStatus] = useState(data.status);
  function changeStatus() {
    setStatus((prevStatus) => !prevStatus);
  }
  return (
    <li>
      <div className="item-container">
        <div className="name">{data.name}</div>
        <div
          onClick={changeStatus}
          className={status ? `status status-done` : `status status-todo`}
        >
          {status ? "done" : "todo"}
        </div>
      </div>
    </li>
  );
}
