import Link from "next/link";

import SignOutView from "@components/signOut";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

function UserLayout(props: any) {
  return <>{props.children}</>;
}

export default UserLayout;
