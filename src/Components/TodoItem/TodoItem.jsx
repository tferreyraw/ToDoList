import "./TodoItem.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`TodoItem ${completed && "TodoItem--complete"}`}>
      <span
        className={`Icon Icon-check ${completed && "Icon-check--complete"}`}
        onClick={onComplete}
      >
        <AiOutlineCheckCircle size={30} />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className='Icon Icon-delete' onClick={onDelete}>
        <RxCrossCircled size={30} />
      </span>
    </li>
  );
}

export { TodoItem };
