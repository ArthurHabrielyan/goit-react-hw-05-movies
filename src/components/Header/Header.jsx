import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const HeaderNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};
