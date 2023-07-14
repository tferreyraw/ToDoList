import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      type='search'
      placeholder='Buscar...'
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
