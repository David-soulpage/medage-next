// react
import React, { FC } from "react";
// react-boostrap
import { Form, InputGroup, Navbar, Nav } from "react-bootstrap";
// import Logo from "src/assets/images/logo.svg";
// styled-icons
import { Search } from "@styled-icons/boxicons-regular";
import { BlackAccountCircle, BlackDropDown } from "@components/styled-icons";
import { AccountCircle } from "@styled-icons/material-outlined";

const RadiologyHeader: FC = () => {
  return (
    <div>
      <div className="d-flex flex-md-row flex-column align-items-center justify-content-between bg-white">
        {/* Logo */}
        <div className="">{/* <img src={Logo} alt="Logo" /> */}</div>
        {/* user info */}
        <div className="d-md-flex d-none align-items-center  ">
          <h4 className=" text-nowrap">Apollo Hospitals Enterprise Limited</h4>
          <AccountCircle size="50" />
          <BlackDropDown />
        </div>
      </div>
      <div className=" p-3 bg-white mt-1 d-flex flex-xl-row flex-column justify-content-between align-items-lg-center">
        <div className="d-lg-block d-none" />
        {/* navbar */}
        <div>
          <Navbar expand="lg">
            <Navbar.Brand className="d-lg-none" href="#home">
              <InputGroup className="bg-secondary d-none d-md-flex w-100 rounded px-2">
                <InputGroup.Prepend>
                  <Search className="icon-height" />
                </InputGroup.Prepend>
                <Form.Control placeholder="Search" className="bg-secondary border-0" />
              </InputGroup>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link href="#home">
                  {" "}
                  <h6 className="fw-normal text-dark me-5">DASHBOARD</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6 className="fw-normal text-dark me-5">APPOINTMENTS</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6 className="fw-normal text-dark me-5">TASKS</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6 className="fw-normal text-dark me-5">REPORTS</h6>
                </Nav.Link>
                <Nav.Link href="#link">
                  <h6 className="fw-normal text-dark me-5">CALENDAR</h6>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {/* search */}
        <div className="me-3 d-none d-lg-block">
          <InputGroup className="bg-light rounded px-2">
            <InputGroup.Prepend>
              <Search className="icon-height" />
            </InputGroup.Prepend>
            <Form.Control placeholder="Search Here" className="bg-light border-0" />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default RadiologyHeader;
