import React from "react";
import {Navbar} from  'react-bootstrap';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo} from "./navbar-elements"

const MyNavbar = () => {
  return (
      <>

        <Nav>
            <NavLogo className="nav-wrapper">
                <NavLink to="/">
                <img
                    src="../../onebudgetLog.png"
                    width="170"
                    height="40"
                    className="d-inline-block align-top"
                    alt="One Budget"
                />
                </NavLink>
            </NavLogo>
            <Bars />
            <NavBtn>
                <NavLink to='/login' >
                Sign In
            </NavLink>
                <NavBtnLink to='/signup' >
                    Register
                </NavBtnLink>
            </NavBtn>
        </Nav>
      </>
  );
};

export default MyNavbar;
