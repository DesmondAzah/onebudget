import React, {useState} from "react";
import SimpleBar from 'simplebar-react';
import { CSSTransition } from 'react-transition-group';
import {Link, Routes, useLocation} from "react-router-dom";
import {Accordion, Badge, Button, Image, Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartPie, faHome,
    faMoneyBillAlt,
    faSignOutAlt,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "../../assets/img/team/profile-picture-3.jpg";
import "./side-bar.css";
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons/faMoneyBill";


const AdminSidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    let isDashBoardActive: string | undefined;
    let isTransactionActive: string | undefined;
    setIsActive(pathname);
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";
    let user: any;
    const rawDetails = sessionStorage.getItem('token');
    if (rawDetails != null) {
        let jsonObject = JSON.parse(rawDetails);
        user = jsonObject.user;
    }
    const onCollapse = () => setShow(!show);
    const logOut = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    function setIsActive(str: string) {
        if(pathname === "/dashboard") {
            isDashBoardActive = "active";
            isTransactionActive = "";
            return undefined;
        } else if(pathname === "/transactions") {
            isTransactionActive = "active";
            isDashBoardActive = "";
            return undefined;
        }

    }

    return (
   <>
       <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
           <Navbar.Brand className="me-lg-5" as={Link} to={"/dashboard"}>
               <Image src={"../../onebudgetLog.png"} className="navbar-brand-light" />
           </Navbar.Brand>
           <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
               <span className="navbar-toggler-icon" />
           </Navbar.Toggle>
       </Navbar>
       <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
           <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-main text-white`}>
               <div className="sidebar-inner px-4 pt-3">
                   <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                       <div className="d-flex align-items-center">
                           <div className="user-avatar lg-avatar me-4">
                               <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                           </div>
                           <div className="d-block">
                               <h6>Hi, {user.fullName}</h6>
                               <Button onSubmit={logOut} variant="secondary"   className="text-dark">
                                   <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                               </Button>
                           </div>
                       </div>
                       <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                           <FontAwesomeIcon icon={faTimes} />
                       </Nav.Link>
                   </div>
                   <Nav className="flex-column pt-3 pt-md-0">
                       <Nav.Item>
                           <Nav.Link href={"/dashboard"} >
                               <Image src={"../../onebudgetLog.png"} className="navbar-brand-light" />
                           </Nav.Link>
                       </Nav.Item>
                       <Nav.Item className={isDashBoardActive}>
                           <Nav.Link href={"/dashboard"}  >
                               <span className="sidebar-icon">
                                   <FontAwesomeIcon icon={faHome} />
                                   </span>

                               <span className="sidebar-text">
                               Dashboard
                               </span>
                           </Nav.Link>
                       </Nav.Item>
                       <Nav.Item className={isTransactionActive}>
                           <Nav.Link href={"/transactions"} >
                               <span className="sidebar-icon">
                                   <FontAwesomeIcon icon={faMoneyBill} />
                                    </span>
                               <span className="sidebar-text">
                               Transactions
                               </span>
                           </Nav.Link>
                       </Nav.Item>
                      </Nav>
               </div>
           </SimpleBar>
       </CSSTransition>
   </>
  );
};

export default AdminSidebar;
