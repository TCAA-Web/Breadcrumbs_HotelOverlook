import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/destinations">Destinationer</NavLink>
        </li>
      </ul>
    </nav>
  );
};
