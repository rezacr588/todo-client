import React, { useState } from "react";
import useTodos from "../context/todosContext";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        value={text}
        placeholder="Add a new todo"
        className="input"
      />
    </form>
  );
};

export default AddTodo;
