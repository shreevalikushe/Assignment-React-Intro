import React from "react";

export const TodoList = ({ title, status }) => {
  return (
    <div className="todoListDiv">
      <h3>
        {title}- {status ? "DONE" : "NOT DONE"}
      </h3>
    </div>
  );
};
