import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodosLoading } from "../Components/TodosLoading/TodosLoading";
import { TodosError } from "../Components/TodosError/TodosError";
import { TodosEmpty } from "../Components/TodosEmpty/TodosEmpty";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";
import { TodoModal } from "../Components/TodoModal/Todomodal";
import { TodoContext } from "../Components/TodoContext/TodoContext";
import { useContext } from "react";
import { TodoForm } from "../Components/TodoForm/TodoForm";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList loading={loading} error={error}>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}

        {error && <TodosError />}

        {!loading && searchedTodos.length === 0 && <TodosEmpty />}

        {searchedTodos.map(({ text, completed }) => {
          return (
            <TodoItem
              key={text}
              text={text}
              completed={completed}
              onComplete={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <TodoModal>
          <TodoForm />
        </TodoModal>
      )}
    </>
  );
}

export { App };
