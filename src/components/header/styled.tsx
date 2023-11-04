import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: fff;
  padding: 10px 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
  font-family: monospace;
  font-size: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #0a0909;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
