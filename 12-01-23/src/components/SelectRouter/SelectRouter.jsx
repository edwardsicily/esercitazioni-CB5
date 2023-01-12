import React from "react";

function SelectRouter({ selectChangeHandler }) {
  return (
    <form>
      <select defaultValue={"default"} onChange={selectChangeHandler}>
        <option disabled value="default">
          Select something
        </option>
        <option value="bloodTypes">Blood Types</option>
        <option value="users">Users</option>
        <option value="card">Credit Card</option>
        <option value="counter">Counter</option>
      </select>
    </form>
  );
}

export default SelectRouter;
