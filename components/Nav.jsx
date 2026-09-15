import { Link } from 'react-router-dom';

import style from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul className={style.nav_items}>
        <li className={style.nav_home}>
          <Link to="/">#VANLIFE</Link>
        </li>
        <li className={style.nav_item}>
          <Link to="/about">About</Link>
        </li>
        <li className={style.nav_item}>
          <Link to="/contact">Contact</Link>
        </li>
     </ul>
    </nav>
  );
}