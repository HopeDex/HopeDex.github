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
  NavButton,
  NavButtonLink,
} from "./NavBarElements";

const Navbar = ({toggleOpen}) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Hope</NavLogo>
          <MIcon onClick = {toggleOpen}>
            <FaBars />
          </MIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Projects">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contacts">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/download">download CV</NavButtonLink>
          </NavButton>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
