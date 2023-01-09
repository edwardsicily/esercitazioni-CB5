import React, { useState } from "react";
import "./todo.scss";
import ListItem from "../ListItem/ListItem";
import InputGroup from "../atoms/InputGroup/InputGroup";

function Todo() {
  const [data, setData] = useState([{ title: "fare la spesa", status: false }]);

  const changeStatus = (index, currentStatus) => {
    setData((oldData) => {
      const newArr = oldData.concat(); //geniale
      newArr[index].status = !currentStatus;
      return newArr;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formEl = event.target;
    const formData = new FormData(formEl);
    const label = formData.get("task-name");
    //console.log(typeof label);
    setData((olddata) => {
      console.log(olddata);
      const newData = { title: label, status: false };
      return [...olddata, newData];
    });
  };
  return (
    <main>
      <h2>My Todo List</h2>
      <form onSubmit={handleSubmit}>
        <InputGroup name="task-name" />
      </form>
      <ul className="todo-list-container">
        {data.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              index={idx}
              title={item.title}
              status={item.status}
              changeStatus={changeStatus}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Todo;
