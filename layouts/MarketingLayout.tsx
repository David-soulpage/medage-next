import Link from "next/link";

import { Navbar, Nav, Container } from "react-bootstrap";

function MarketingLayout(props: any) {
  return (
    <>
      <Navbar expand="lg">
        <Container className="py-2 px-5" fluid>
          <Navbar.Brand className="fw-bold text-white">
            <Link href="/">
              <a className="text-decoration-none">Medage</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li className="nav-item fw-bold px-3">
                <Link href="/signin">
                  <a className="text-decoration-none">Sign In</a>
                </Link>
              </li>
              <li className="nav-item fw-bold px-3">
                <Link href="/signup">
                  <a className="text-decoration-none">Sign Up</a>
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}
    </>
  );
}

export default MarketingLayout;
