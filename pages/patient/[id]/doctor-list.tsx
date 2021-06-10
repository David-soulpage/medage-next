import React, { useState } from "react";
//local components
import PatientDashboardLayout from "layouts/PatientDashboardLayout";
import { CommonCard, DoctorCard } from "components/card";
// react bootstrap
import { Form, InputGroup, Dropdown } from "react-bootstrap";
//icons
import { Filter, Search, Calendar } from "@styled-icons/bootstrap";
import { Location } from "@styled-icons/zondicons";
import { DotFill } from "@styled-icons/octicons";
//lodash
import _ from "lodash";

const ProblemList = () => {
  const options = [
    "Date",
    "Back Pain",
    "Speciality",
    "Doctor",
    "Availability",
    "Time of Day",
    "More Filters",
  ];

  const Header = () => (
    <div className="d-flex">
      <button className="btn btn-light">
        <Filter size="20" /> Filter
      </button>
      <div className="d-flex ms-auto border-1 border rounded">
        <InputGroup className="border-end d-flex align-items-center px-1">
          <Form.Control className="border-0 me-2" placeholder="Search Doctor" />
          <InputGroup.Append>
            <Search size="20" />
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="border-end d-flex align-items-center px-1">
          <Form.Control className="border-0 me-2" placeholder="Location" />
          <InputGroup.Append>
            <Location size="20" />
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="border-end d-flex align-items-center px-1">
          <Form.Control className="border-0 me-2" placeholder="Today" />
          <InputGroup.Append>
            <Calendar size="20" />
          </InputGroup.Append>
        </InputGroup>
        <div className="d-flex align-items-center px-1">
          <Search size="20" />
        </div>
      </div>
    </div>
  );

  return (
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Search Doctor</h6>
        <CommonCard>
          <Header />
          <div className="d-flex mt-4">
            {_.map(options, (option, id) => (
              <div key={id} className="border px-2 py-1 me-2 rounded text-muted">
                {option}
              </div>
            ))}
          </div>
          <h6 className="my-5 fw-bold">
            Total 23 Doctors are Available <DotFill size="20" className="text-success" />
          </h6>
          <div>
            <DoctorCard />
          </div>
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};

export default ProblemList;
