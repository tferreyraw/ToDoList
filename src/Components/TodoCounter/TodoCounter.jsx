import { useContext } from "react";
import "./TodoCounter.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <>
      <h1 className='TodoTitle'>
        ToDo - List
        <span>
          <FaRegCheckCircle />
        </span>
      </h1>
      <p className='TodoCounter'>
        {totalTodos === 0 ? (
          <span>No tienes tareas pendientes</span>
        ) : completedTodos === totalTodos ? (
          <>
            Has completado <span>TODAS</span> las tareas
          </>
        ) : (
          <>
            Has completado <span>{completedTodos}</span> de{" "}
            <span>{totalTodos}</span> tareas
          </>
        )}
      </p>
    </>
  );
}

export { TodoCounter };
