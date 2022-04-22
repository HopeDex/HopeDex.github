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

const Navbar = ({ toggleOpen }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/home">HOPE MADZIAKAPITA</NavLogo>
          <MIcon onClick={toggleOpen}>
            <FaBars />
          </MIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">PROJECTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contacts">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/download">Download CV</NavButtonLink>
          </NavButton>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
