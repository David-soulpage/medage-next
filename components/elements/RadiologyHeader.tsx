// react
import React, { FC } from "react";
// react-boostrap
import { Form, InputGroup, Image } from "react-bootstrap";
// styled-icons
import { Search } from "@styled-icons/boxicons-regular";
import { AccountCircle } from "@styled-icons/material-outlined";
import { ArrowDropDown } from "@styled-icons/remix-line";

const RadiologyHeader: FC = () => {
  return (
    <div className="container-fluid bg-white py-2 px-3">
      <div className="d-flex align-items-center justify-content-between ">
        <div>
          <Image src="/logo.svg" />
        </div>
        <div className="d-flex align-items-center  ">
          <h6 className="m-0">Apollo Hospitals Enterprise Limited</h6>
          <AccountCircle size="40" className="ms-4 me-1" />
          <ArrowDropDown size="50" />
        </div>
      </div>
      <div className="bg-light">
        <div className="p-1"></div>
      </div>
      <div className="d-flex py-2 flex-row-reverse  align-items-center">
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
