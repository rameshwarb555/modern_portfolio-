import React from 'react';
import styled from 'styled-components';



const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo>My Portfolio</NavLogo>
      <NavMenu>
        <NavItem >About</NavItem>
        <NavItem >Services</NavItem>
        <NavItem >Contact</NavItem>
      </NavMenu>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background-color: #0A4D68;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.h1`
  font-size: 24px;
  color: #fff;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 20px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
