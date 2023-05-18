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
        {completedTodo === totalTodo ? (
          <>
            <span>Felicidades!!!</span>
            <br /> Has completado <span>TODAS</span> las tareas
          </>
        ) : (
          <>
            Has completado <span>{completedTodo}</span> de{" "}
            <span>{totalTodo}</span> tareas
          </>
        )}
      </p>
    </>
  );
}

export { TodoCounter };
