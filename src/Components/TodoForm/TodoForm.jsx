import { useState, useContext } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (ev) => {
    ev.preventDefault();
    setOpenModal(false);
  };

  const onChange = (ev) => {
    setNewTodoValue(ev.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo!</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Hacer la tarea!'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'
        >
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
