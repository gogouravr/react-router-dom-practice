import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to=''>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='events'>
              Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
