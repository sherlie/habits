import { Link } from 'react-router';
import { nav, navLink, navList } from './Navbar.css';

function Navbar() {

  return (
    <nav className={nav}>
      <ul className={navList}>
        <li>
          <Link to="/" className={navLink}>Home</Link>
        </li>
        <li>
          <Link to="/addhabit" className={navLink}>New Habit</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;