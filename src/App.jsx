import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoFilter } from "./Components/TodoFilter/TodoFilter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";

const defaultTodos = [
  {
    text: "Cortar cebolla",
    completed: true,
  },
  {
    text: "Hacer Curso",
    completed: false,
  },
  {
    text: "Llorar con la llorona",
    completed: false,
  },
  {
    text: "Merendar",
    completed: true,
  },
  {
    text: "Hacer ejercicio",
    completed: true,
  },
  {
    text: "Cocinar almuerzo",
    completed: false,
  },
  {
    text: "Cortar cebolla",
    completed: true,
  },
  {
    text: "Hacer Curso",
    completed: false,
  },
  {
    text: "Llorar con la llorona",
    completed: true,
  },
  {
    text: "Merendar",
    completed: false,
  },
  {
    text: "Hacer ejercicio",
    completed: true,
  },
  {
    text: "Cocinar almuerzo",
    completed: false,
  },
];

function App() {
  return (
    <>
      <TodoCounter completedTodo={14} totalTodo={25} />
      <TodoFilter />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { App };
