import { createPortal } from "react-dom";
import "./TodoModal.css";

function TodoModal({ children }) {
  return createPortal(
    <div className='TodoModal'>{children}</div>,
    document.getElementById("modal")
  );
}

export { TodoModal };
