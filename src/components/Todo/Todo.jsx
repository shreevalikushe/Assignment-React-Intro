import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const handleAdd = () => {
    let payload = {
      title: text,
      status: false,
    };
    setTodo([...todo, payload]);
  };
  const handleToggle = () => {};
  return (
    <div>
      <h1>Basic Todo Application</h1>
      <div className="todoDiv">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter Todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <h2>List of Tasks</h2>
      {todo.map((item, i) => (
        <TodoList key={i} {...item} />
      ))}
    </div>
  );
};
