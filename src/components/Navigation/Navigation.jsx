import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const addNavLinkActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <nav>
      <NavLink className={addNavLinkActiveClass} to="/">
        Home
      </NavLink>
      <NavLink className={addNavLinkActiveClass} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={addNavLinkActiveClass} to="/favorite">
        Favorite
      </NavLink>
    </nav>
  );
};

export default Navigation;
