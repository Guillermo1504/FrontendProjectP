import { Link, Outlet } from "react-router-dom";
import { NavItem, NavList, Navbar } from "./styled";

const Header = () => {
  return (
    <>
      <Navbar>
        <NavList>
          <NavItem>
            <Link style={{ color: "black" }} to="/">
              Registrate
            </Link>
          </NavItem>
          <NavItem>
            <Link style={{ color: "black" }} to="/login">
              Login
            </Link>
          </NavItem>
        </NavList>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
