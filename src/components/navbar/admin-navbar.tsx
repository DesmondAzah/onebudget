import React, {useState} from "react";
import {
    Container,
    Dropdown,
    Image,
    Nav,
    Navbar
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faEnvelopeOpen,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import "./admin-navbar.css";

const AdminNavbar = () => {
    let user: any;
    const rawDetails = sessionStorage.getItem('token');
    if (rawDetails != null) {
        let jsonObject = JSON.parse(rawDetails);
        user = jsonObject.user;
    }

    function logout() {
        sessionStorage.removeItem('token');
        window.location.href = "/";
        return undefined;
    }

    return (
      <>
          <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
              <Container fluid className="px-0">
                  <div className="d-flex justify-content-between w-100">
                      <div className="d-flex align-items-center">

                      </div>
                      <Nav className="align-items-center">
                          <Dropdown as={Nav.Item}>
                              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                                  <div className="media d-flex align-items-center">
                                      <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                                      <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                          <span className="mb-0 font-small fw-bold">{user.fullName}</span>
                                      </div>
                                  </div>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                                  <Dropdown.Item className="fw-bold">
                                      <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                                  </Dropdown.Item>
                                  <Dropdown.Item className="fw-bold">
                                      <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                                  </Dropdown.Item>
                                  <Dropdown.Item className="fw-bold">
                                      <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> Inbox
                                  </Dropdown.Item>
                                  <Dropdown.Divider />

                                  <Dropdown.Item className="fw-bold" onClick={logout}>
                                      <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                                  </Dropdown.Item>
                              </Dropdown.Menu>
                          </Dropdown>
                      </Nav>

                  </div>
              </Container>
          </Navbar>
      </>
  );
};
export default AdminNavbar;
