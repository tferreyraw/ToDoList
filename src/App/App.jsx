import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
// import { TodoFilter } from "../Components/TodoFilter/TodoFilter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

// const defaultTodos = [
//   {
//     text: "Cortar cebolla!",
//     completed: true,
//   },
//   {
//     text: "Hacer Curso!",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona!",
//     completed: false,
//   },
//   {
//     text: "Merendar!",
//     completed: true,
//   },
//   {
//     text: "Hacer ejercicio!",
//     completed: true,
//   },
//   {
//     text: "Cocinar almuerzo!",
//     completed: false,
//   },
//   {
//     text: "Cortar cebolla",
//     completed: true,
//   },
//   {
//     text: "Hacer Curso",
//     completed: false,
//   },
//   {
//     text: "Llorar con la llorona",
//     completed: true,
//   },
//   {
//     text: "Merendar",
//     completed: false,
//   },
//   {
//     text: "Hacer ejercicio",
//     completed: true,
//   },
//   {
//     text: "Cocinar almuerzo",
//     completed: true,
//   },
//   {
//     text: "Cocinar cena",
//     completed: false,
//   },
//   {
//     text: "Cenar",
//     completed: false,
//   },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

// localStorage.removeItem("TODOS_V1");

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completedTodo={completedTodos} totalTodo={totalTodos} />
      {/* <TodoFilter /> */}

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { App };
