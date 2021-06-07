import React from "react";
//local components
import PatientDashboardLayout from "@layouts/PatientDashboardLayout";
import { CommonCard } from "@components/card";
// react bootstrap
import { Form, InputGroup, Dropdown } from "react-bootstrap";
//icons
import {
  Filter,
  Search,
  Calendar,
  StarFill,
  CameraVideoFill,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "@styled-icons/bootstrap";
import { Location } from "@styled-icons/zondicons";
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

  const timings = ["10:00 am", "11:00 am", "10:00 am", "11:00 am", "10:00 am", "11:00 am"];
  return (
    <PatientDashboardLayout>
      <div className="container pt-2">
        <h6 className="fw-bold">Search Doctor</h6>
        <CommonCard>
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
          <div className="d-flex mt-4">
            {_.map(options, (option, id) => (
              <div key={id} className="border px-2 py-1 me-2 rounded text-muted">
                {option}
              </div>
            ))}
          </div>
          <h6 className="mt-3 fw-bold">Total 23 Doctors are Available</h6>
          <div>
            <CommonCard>
              <div className="row">
                <div className="col-md-3 text-center">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt="Profile Image"
                    height="275px"
                    width="215px"
                    className="rounded"
                  />
                  <small className="text-primary">View Profile</small>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-around">
                  <h4 className="fw-bold">Dr. Sara Graham</h4>
                  <small className="text-muted">Cardiologist</small>
                  <small className="text-muted">12 Years Experience Overall </small>
                  <h6 className="fw-bold">USA, San Fransisco, Califonia, 2Km</h6>
                  <small className="text-muted">Distance 2.7 km </small>
                  <span>
                    <StarFill size="20" color="#FFCC00" />{" "}
                    <small className="text-muted">4.23(425)</small>{" "}
                  </span>
                  <button className="btn btn-sm btn-outline-warning">
                    Request for Appointment
                  </button>
                </div>
                <div className="col-md-6">
                  <div className="d-flex border-bottom pb-1">
                    <div className="d-flex align-items-center">
                      <small>All Appointments</small>
                      <small className="mx-3">In Person</small>
                      <small>
                        <CameraVideoFill size="20" className="text-primary" /> Video Call
                      </small>
                    </div>
                    <Dropdown className="ms-auto">
                      <Dropdown.Toggle
                        variant="outline"
                        className="text-primary"
                        id="dropdown-basic"
                      >
                        This week <ChevronDown size="20" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="border-bottom">
                    <div className="d-flex pt-2">
                      <p>
                        <span className="fw-bold">23 May,</span>{" "}
                        <span className="text-muted">Sunday</span>
                      </p>
                      <div className="ms-auto d-flex">
                        <ChevronLeft size="20" />
                        <ChevronRight size="20" className="mx-3" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <div className="row g-2">
                      {_.map(timings, (time, id) => (
                        <div key={id} className="col-3">
                          <div className="border p-2 rounded me-2">
                            <small>{time}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="ms-auto">
                      <small className="text-primary">View All Availabiltiy</small>
                    </div>
                  </div>
                </div>
              </div>
            </CommonCard>
          </div>
        </CommonCard>
      </div>
    </PatientDashboardLayout>
  );
};

export default ProblemList;
