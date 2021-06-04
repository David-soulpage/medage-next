// components
import DashboardLeftNav from "components/dashboard/DashboardLeftNav";
import SignOutView from "@components/signOut";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const AuthPageLayout = (props: any) => {
  return (
    <>
      <div>
        <Navbar className="shadow-sm" expand="lg">
          <Container className="py-2 px-5" fluid>
            <Navbar.Brand className="fw-bold">
              <Link href="/">
                <a className="text-decoration-none">Medage</a>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                <li className="nav-item fw-light ms-3 px-2">
                  <Link href="">
                    <a className="text-decoration-none text-dark">Sign In</a>
                  </Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default AuthPageLayout;
