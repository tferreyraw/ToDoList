import "./TodoFilter.css";
function TodoFilter() {
  return (
    <nav className='TodoFilter'>
      <ul className='TodoFilter-menu'>
        <li className='TodoFilter-menu--all'>Todas</li>
        <li className='TodoFilter-menu--pending'>Pendientes</li>
        <li className='TodoFilter-menu--completed'>Completadas</li>
      </ul>
    </nav>
  );
}

export { TodoFilter };
