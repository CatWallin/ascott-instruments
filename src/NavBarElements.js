import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #E8D9C2;
  height: 30px;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  padding-bottom: 5px;
`;
  
export const NavLink = styled(Link)`
  color: #694536;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #E0C2A5;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #E0C2A5;
  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  /* Second Nav */
  /* margin-right: 0; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
