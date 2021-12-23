import React from "react";
import {Bars, Nav, NavBtnAdmin, NavLinkAdmin, NavLogo} from "./navbar-elements";
import {NavDropdown} from "react-bootstrap";

const AdminNavbar = () => {
    let user: any;
    const rawDetails = sessionStorage.getItem('token');
    if (rawDetails != null) {
        let jsonObject = JSON.parse(rawDetails);
        user = jsonObject.user;
        console.log(user);
    }

    function logout() {
        return undefined;
    }

    function routToProfilePage() {
        return undefined;
    }

    return (
      <>
    <Nav className={'navbar-dark bg-dark'} style={{height:'50px'}}>
        <NavLogo className="nav-wrapper" >
            <NavLinkAdmin to="/dashboard">
            <img
                src="../../onebudgetLog.png"
                width="170"
                height="40"
                className="d-inline-block align-top"
                alt="One Budget"
            />
        </NavLinkAdmin>
        </NavLogo>
        <Bars/>
        <NavBtnAdmin>
            <NavDropdown title={
                <span style={{color:'white'}}>
                   <i className="fa fa-bell-o"/> Dropdown
            </span>
            } id="nav-dropdown" style={{color:'white'}}>
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={
                <span style={{color:'white'}}>
                   <i className="fa fa-user-o"/> {user.fullName}
            </span>
            } id="nav-dropdown" style={{color:'white'}}>
                <NavDropdown.Item eventKey="4.1">
                    <span onClick={routToProfilePage()}>
                        <i className="fa fa-user"/> Profile
                    </span>

                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout()}>Logout</NavDropdown.Item>
            </NavDropdown>
        </NavBtnAdmin>
    </Nav>
      </>
  );
};
export default AdminNavbar;
