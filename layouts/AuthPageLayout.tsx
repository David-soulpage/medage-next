import React from "react";
// next
import Link from "next/link";
// react-boostrap
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const AuthPageLayout = (props: any) => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="row">
        <Navbar className="shadow-sm" expand="lg">
          <Container className="py-2 px-5" fluid>
            <Navbar.Brand className="fw-bold">
              <Link href="/">
                <Image src="/logo.svg" className="img-fluid" width="100" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="justify-content-end ms-auto">
                <li className="nav-item fw-bold ms-3 px-2">
                  <Link href="">
                    <a className="text-decoration-none text-base-black">
                      <small>Login</small>
                    </a>
                  </Link>
                </li>
                <li className="nav-item fw-bold ms-3 px-2">
                  <Link href="">
                    <a className="text-decoration-none text-base-black">
                      <small>Contact Us</small>
                    </a>
                  </Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="row flex-grow-1">{props.children}</div>
    </div>
  );
};

export default AuthPageLayout;
