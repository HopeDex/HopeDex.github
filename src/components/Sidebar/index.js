import React from "react";
import {
  Container,
  Closecon,
  Icon,
  SWrapper,
  SMenu,
  SLink,
  SBtnWrap,
  SRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggleOpen }) => {
  return (
    <Container isOpen={isOpen} onClick={toggleOpen}>
      <Icon onClick={toggleOpen}>
        <Closecon />
      </Icon>
      <SWrapper>
        <SMenu>
          <SLink to="services" onClick={toggleOpen}>
            Services
          </SLink>
          <SLink to="projects" onClick={toggleOpen}>
            Projects
          </SLink>
          <SLink to="contacts" onClick={toggleOpen}>
            Contact
          </SLink>
        </SMenu>
        <SBtnWrap>
          <SRoute to="/download">Download cv</SRoute>
        </SBtnWrap>
      </SWrapper>
    </Container>
  );
};

export default Sidebar;
