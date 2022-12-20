import React from "react";
import { ReactComponent as Selected } from "../assets/check.svg";
import { ReactComponent as Remove } from "../assets/path-copy.svg";
import AddTodo from "./AddTodo";
import useTodos from "../context/todosContext";

const TodosManager = () => {
  const { data, update, loading, remove, completed, filter } = useTodos();
  return (
    <div>
      <AddTodo />
      <div className="todos-container">
        {!loading &&
          data.todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <div className="todo-content">
                {todo.completed ? (
                  <button
                    onClick={() => update({ ...todo, completed: false })}
                    className="selected"
                  >
                    <Selected />
                  </button>
                ) : (
                  <button
                    onClick={() => update({ ...todo, completed: true })}
                    className="unselected"
                  >
                    <Selected />
                  </button>
                )}
                <p>{todo.text}</p>
              </div>
              <button className="remove-icon" onClick={() => remove(todo.id)}>
                <Remove />
              </button>
            </div>
          ))}
      </div>
      <p className="sub-title">
        <p className="head">Show:</p>
        <a
          className={completed !== null ? "link" : "inactive-link"}
          onClick={() => filter(null)}
        >
          All
        </a>
        <a
          className={completed !== true ? "link" : "inactive-link"}
          onClick={() => filter(true)}
        >
          Completed
        </a>
        <a
          className={completed !== false ? "link" : "inactive-link"}
          onClick={() => filter(false)}
        >
          Incompleted
        </a>
      </p>
    </div>
  );
};

export default TodosManager;
