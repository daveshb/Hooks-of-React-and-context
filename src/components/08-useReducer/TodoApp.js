import React from "react";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useEffect } from "react";
import { TodoListItem } from "./TodoListItem";
import { TodoAdd } from "./TodoAdd";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatc] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatc(action);
  };

  const handleToggle = (todoId) => {
    dispatc({
      type: "toggle",
      payload: todoId,
    });
  };

  const hanleAddTodo = (newTodo) => {
    dispatc({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoListItem
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd hanleAddTodo={hanleAddTodo} />
        </div>
      </div>
    </>
  );
};
