import "./TodoFilter.css";
function TodoFilter() {
  return (
    <nav className='TodoFilter'>
      <ul className='TodoFilter-menu'>
        <li
          className='TodoFilter-menu--all all'
          onClick={() => {
            console.log("muestro TODOS");
          }}
        >
          Todas
        </li>
        <li
          className='TodoFilter-menu--pending pending'
          onClick={() => console.log("muestro PENDIENTES")}
        >
          Pendientes
        </li>
        <li
          className='TodoFilter-menu--completed completed'
          onClick={() => console.log("muestro COMPLETOS")}
        >
          Completadas
        </li>
      </ul>
    </nav>
  );
}

export { TodoFilter };
