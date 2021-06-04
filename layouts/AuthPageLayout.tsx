// next
import Link from "next/link";
// react-boostrap
import { Navbar, Nav, Container, Image } from "react-bootstrap";

const AuthPageLayout = (props: any) => {
  return (
    <>
      <div>
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
                    <a className="text-decoration-none text-base-black">Contact Us</a>
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
