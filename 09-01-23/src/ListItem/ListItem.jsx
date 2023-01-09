import React from "react";
import "./listitem.scss";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

function ListItem({ title, status, index, changeStatus }) {
  const clickHandler = () => {
    changeStatus(index, status);
  };
  return (
    <li>
      <div className="list-item">
        <h4>{title}</h4>

        <i onClick={clickHandler}>
          {status ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </i>
      </div>
    </li>
  );
}

export default ListItem;
