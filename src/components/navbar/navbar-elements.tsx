import {FaBars} from 'react-icons/fa';
import { NavLink as Link}   from "react-router-dom";
import styled from 'styled-components';
export const Nav = styled.nav`
  background: #fff;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1240px) / 3);
  z-index: 12;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  opacity: 0.9;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #4153ef;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  box-sizing: border-box;
  overflow: visible;
  visibility: inherit;
  font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, DejaVu Sans, Verdana, sans-serif;
  &.active {
    color: #808080;
  }
  &:hover {
    background-color: #ffffff;
    color: darkorange;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
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
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: flex;
  }
` ;
  
export const NavBtnLink = styled(Link) `
  border-radius: 4px;
  background: transparent;
  border: 1px solid blue;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ffffff;
    color: darkorange;
  }
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  `;
