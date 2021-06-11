// react
import React, { FC } from "react";
// next
import Link from "next/link";
// react-boostrap
import { Form, InputGroup, Image, Navbar, Nav, Container } from "react-bootstrap";
// styled-icons
import { Search } from "components/styled-icons";
import { AccountCircle } from "components/styled-icons";
import { ArrowDropDown } from "components/styled-icons";

const RadiologyHeader: FC = () => {
  return (
    <div className="bg-light ">
      <Navbar className="shadow-sm " expand="lg">
        <Container className="py-2  bg-white" fluid>
          <Navbar.Brand className="fw-bold">
            <Link href="/">
              <Image src="/logo.svg" className="img-fluid" width="100" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" ms-auto">
              <li className="nav-item fw-bold ms-3 px-2 d-flex align-items-center">
                <Link href="">
                  <a className="text-decoration-none text-base-black">
                    <small>Apollo Hospitals Enterprise Limited</small>
                  </a>
                </Link>
              </li>
              <li className="nav-item fw-bold ms-3 px-2">
                <Link href="">
                  <div className="d-flex align-items-center">
                    <AccountCircle size="40" className="ms-4 me-1" />
                    <ArrowDropDown size="50" className="fw-light" />
                  </div>
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex py-2 px-2 flex-row-reverse  align-items-center mt-2 bg-white">
        <InputGroup className="bg-light rounded px-2 d-flex align-items-center w-15 ">
          <InputGroup.Prepend>
            <Search size="20" />
          </InputGroup.Prepend>
          <Form.Control placeholder="Search Here" className="bg-light border-0" />
        </InputGroup>

        <div className="d-flex w-50 justify-content-between align-items-center me-5">
          <h6 className="fw-normal m-0">Dashboard</h6>
          <h6 className="fw-normal m-0">Appointments</h6>
          <h6 className="fw-normal m-0">Tasks</h6>
          <h6 className="fw-normal m-0">Reports</h6>
          <h6 className="fw-normal m-0">Calender</h6>
        </div>
      </div>
    </div>
  );
};

export default RadiologyHeader;
