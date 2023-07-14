import "./CreateTodoButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function CreateTodoButton({ setOpenModal }) {
  return (
    <div className='createTodo-container'>
      <button
        type='button'
        className='createTodoButton'
        onClick={() => setOpenModal((state) => !state)}
      >
        <AiOutlinePlusCircle size={40} height='100%' />
      </button>
    </div>
  );
}

export { CreateTodoButton };
