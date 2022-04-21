import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MIcon,
  NavItem,
  NavMenu,
  NavLinks,
} from "./NavBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Hope</NavLogo>
          <MIcon>
            <FaBars />
          </MIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
