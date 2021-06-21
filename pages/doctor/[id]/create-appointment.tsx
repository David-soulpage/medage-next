import React from "react";
//local components
import { CommonCard } from "components/card";
import DoctorLayout from "layouts/DoctorLayout";
// react bootstrap
import { Form, Dropdown } from "react-bootstrap";
//icons
import { KeyboardArrowDown } from "components/styled-icons";

const CreateAppointment = () => {
  return (
    <DoctorLayout>
      <div className="container pt-2">
        <h6 className="text-dark fw-bold mb-3">Create Appointment</h6>
        <CommonCard>
          <div className="row g-3">
            <div className="col-12 d-flex align-items-center">
              <h6 className="m-0 me-3">Type</h6>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" size="sm" id="dropdown-basic">
                  Appointment <KeyboardArrowDown size="20" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-12">
              <div className="row g-3">
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control placeholder="Enter Here" />
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Office</Form.Label>
                    <Dropdown className="w-100">
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="w-100 text-muted"
                        id="dropdown-basic"
                      >
                        Select <KeyboardArrowDown size="20" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Scheduled</Form.Label>
                    <div className="d-flex">
                      <Form.Control placeholder="Date" className="me-2" />
                      <Form.Control placeholder="Time" />
                    </div>
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Exam</Form.Label>
                    <Dropdown className="w-100">
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="w-100 text-muted"
                        id="dropdown-basic"
                      >
                        Select <KeyboardArrowDown size="20" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Profile</Form.Label>
                    <Dropdown className="w-100">
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="w-100 text-muted"
                        id="dropdown-basic"
                      >
                        Select <KeyboardArrowDown size="20" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Dropdown className="w-100">
                      <Dropdown.Toggle
                        variant="outline-dark"
                        className="w-100 text-muted"
                        id="dropdown-basic"
                      >
                        Select <KeyboardArrowDown size="20" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-4 col-12">
                  <Form.Group>
                    <Form.Label>Reason</Form.Label>
                    <Form.Control placeholder="Enter Here" as="textarea" rows={4} />
                  </Form.Group>
                </div>{" "}
                <div className="col-lg-8 col-12">
                  <Form.Group>
                    <Form.Label>Notes</Form.Label>
                    <Form.Control placeholder="Enter Here" as="textarea" rows={4} />
                  </Form.Group>
                </div>{" "}
                <div className="col-12">
                  <button className="btn btn-sm me-3">Cancel</button>
                  <button className="btn btn-sm btn-primary text-white">Create</button>
                </div>
              </div>
            </div>
          </div>
        </CommonCard>
      </div>
    </DoctorLayout>
  );
};

export default CreateAppointment;
