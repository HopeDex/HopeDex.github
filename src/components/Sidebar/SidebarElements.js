import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: beige;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const Closecon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  postion: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SWrapper = styled.div`
  color: black;
`;

export const SLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 02s ease-in-out;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    color: white !important;
    transition: 0.2s ease-in-out;
  }
`;

export const SBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SRoute = styled(LinkRoute)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #010606;
  }
`;
