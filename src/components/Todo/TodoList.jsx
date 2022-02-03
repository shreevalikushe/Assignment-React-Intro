import React from "react";

export const TodoList = ({ title, status, id, handleToggle }) => {
  const toggle = (i) => {
    console.log(i);
    handleToggle(i);
  };

  return (
    <div className="todoListDiv">
      <h3>
        {title}- {status ? "DONE" : "NOT DONE"} <br />
        <button onClick={() => toggle(id)}>Toggle</button>
      </h3>
    </div>
  );
};
