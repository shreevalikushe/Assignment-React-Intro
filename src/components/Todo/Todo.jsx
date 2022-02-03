import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const handleAdd = () => {
    let payload = {
      id: text.length,
      title: text,
      status: false,
    };
    console.log(payload);
    setTodo([...todo, payload]);
  };
  const handleToggle = (id) => {
    let statusChange = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    //item.id === id ? { ...item, status: !item.status } : item
    setTodo(statusChange);
  };
  console.log(todo);
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
        <TodoList key={i} {...item} handleToggle={handleToggle} />
      ))}
    </div>
  );
};
