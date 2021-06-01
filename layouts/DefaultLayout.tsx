import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

function DefaultLayout(props: any) {
  return (
    <>
      <Navbar className="shadow-sm" expand="lg">
        <Container className="py-2 px-5" fluid>
          <Navbar.Brand className="fw-bold">
            <Link href="/">
              <a className="text-decoration-none">Medage</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <li className="nav-item fw-light ms-3 px-2">
                <Link href="">
                  <a className="text-decoration-none text-dark">Dashboard</a>
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

export default DefaultLayout;
