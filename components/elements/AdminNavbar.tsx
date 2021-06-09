import React from "react";
//react bootstrap
import { InputGroup, Form } from "react-bootstrap";
//icons
import { Search } from "@styled-icons/boxicons-regular";

const AdminNavbar = () => {
  return (
    <div className="d-flex py-2 px-2 flex-row-reverse  align-items-center mt-2 bg-white shadow-sm">
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
  );
};

export default AdminNavbar;
