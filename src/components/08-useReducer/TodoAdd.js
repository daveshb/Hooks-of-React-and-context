import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ hanleAddTodo }) => {
  const [{ description }, handleImputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    hanleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleImputChange}
        />
        <button
          className="btn btn-outline-primary mt-2 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
