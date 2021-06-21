import React from "react";
//router
import { useRouter } from "next/router";
//react bootstrap
import { InputGroup, Form } from "react-bootstrap";
//icons
import { Search } from "components/styled-icons";
import ActiveLink from "./ActiveLink";

const AdminNavbar = () => {
  const router = useRouter();
  const data = [
    {
      name: "Dashboard",
      route: "dashboard",
    },
    {
      name: "Appointments",
      route: "appointment",
    },
    {
      name: "Tasks",
      route: "tasks",
    },
    {
      name: "Reports",
      route: "reports",
    },
    {
      name: "Calendar",
      route: "calendar",
    },
  ];

  const data2 = [
    {
      name: "Dashboard",
      route: "dashboard",
    },
    {
      name: "Finance",
      route: "finances",
    },
    {
      name: "Forms",
      route: "forms",
    },
    {
      name: "Inventory",
      route: "inventory",
    },
    {
      name: "HR",
      route: "hr",
    },
  ];

  const data3 = [
    {
      name: "Dashboard",
      route: "dashboard",
    },
    {
      name: "Patient Information",
      route: "patient-information",
    },
    {
      name: "Doctors",
      route: "",
    },
    {
      name: "Reports",
      route: "reports",
    },
    {
      name: "Calendar",
      route: "calendar",
    },
  ];
  return (
    <div className="d-flex py-2 px-2 flex-row-reverse  align-items-center mt-2 bg-white shadow-sm">
      <InputGroup className="bg-light rounded px-2 d-flex align-items-center w-15 ">
        <InputGroup.Prepend>
          <Search size="20" />
        </InputGroup.Prepend>
        <Form.Control placeholder="Search Here" className="bg-light border-0" />
      </InputGroup>

      <div className="d-flex w-50 justify-content-between align-items-center me-5">
        {(router.pathname.includes("doctor")
          ? data
          : router.pathname.includes("admin")
          ? data2
          : router.pathname.includes("nurse")
          ? data3
          : []
        ).map((item, id) => (
          <ActiveLink href={item.route} key={id}>
            <h6 className="fw-normal m-0 cr-p">{item.name}</h6>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default AdminNavbar;
