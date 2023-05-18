import "./CreateTodoButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function CreateTodoButton() {
  return (
    <div className='createTodo-container'>
      <button
        type='button'
        className='createTodoButton'
        onClick={() => console.log("diste Click!!!!")}
      >
        <AiOutlinePlusCircle size={40} height='100%' />
      </button>
    </div>
  );
}

export { CreateTodoButton };
