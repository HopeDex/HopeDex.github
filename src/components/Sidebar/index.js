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
const Sidebar = () => {
  return (
    <Container>
      <Icon>
        <Closecon />
      </Icon>
      <SWrapper>
        <SMenu>
          <SLink to="about">About</SLink>
          <SLink to="about">Projects</SLink>
          <SLink to="about">Contact</SLink>
        </SMenu>
        <SBtnWrap>
          <SRoute to="/download">download cv</SRoute>
        </SBtnWrap>
      </SWrapper>
    </Container>
  );
};

export default Sidebar;
