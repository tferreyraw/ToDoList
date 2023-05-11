import "./TodoCounter.css";
import { FaRegCheckCircle } from "react-icons/fa";

function TodoCounter({ completedTodo, totalTodo }) {
  return (
    <>
      <h1 className='TodoTitle'>
        ToDo - List
        <span>
          <FaRegCheckCircle />
        </span>
      </h1>
      <p className='TodoCounter'>
        Has completado <span>{completedTodo}</span> de <span>{totalTodo}</span>{" "}
        tareas
      </p>
    </>
  );
}

export { TodoCounter };
