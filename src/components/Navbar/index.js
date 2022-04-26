import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
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
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            HOPE MADZIAKAPITA
          </NavLogo>
          <MIcon onClick={toggleOpen}>
            <FaBars />
          </MIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                SERVICES
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                PROJECTS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contacts"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                CONTACT
              </NavLinks>
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
