import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/timer">Timer</NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
};

export default Nav;
