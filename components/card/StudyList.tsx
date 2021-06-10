// react
import React from "react";
// components
import { AppointmentsList } from "components/tables";
import CommonCard from "./CommonCard";
// react-boostrap
import { Form, InputGroup } from "react-bootstrap";
// styled-icons
import { Search } from "@styled-icons/bootstrap";

const StudyList = () => {
  return (
    <CommonCard>
      <div className="d-flex align-items-center">
        <div>
          <h6 className="fw-bold m-0">Study List</h6>
        </div>
        <div className="ms-3">
          <button className="btn btn-sm btn-outline-primary">
            <small>Upload New Study</small>{" "}
          </button>
        </div>
        <div className="ms-auto">
          <InputGroup className="d-flex align-items-center bg-light">
            <Form.Control placeholder="Search  by ID, Name" className="border-0 bg-light" />
            <Search className="text-dark mx-2" size="20" />
          </InputGroup>
        </div>
      </div>
      <div className="my-3">
        <AppointmentsList />
      </div>
    </CommonCard>
  );
};

export default StudyList;
