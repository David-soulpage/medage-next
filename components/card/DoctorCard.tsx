import { useState } from "react";
//local components
import { CommonCard } from "@components/card";
import { CommonModal } from "@components/modal";
//react bootstrap
import { Dropdown, Form, InputGroup, Modal } from "react-bootstrap";
//icons
import { ChevronWithCircleLeft, ChevronWithCircleRight } from "@styled-icons/entypo";
import {
  StarFill,
  CameraVideoFill,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Calendar,
} from "@styled-icons/bootstrap";
//lodash
import _ from "lodash";

const DoctorCard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [show, setShow] = useState(false);
  const [doctor, setDoctor] = useState(null);

  const timings = ["10:00 am", "11:00 am", "10:00 am", "11:00 am", "10:00 am", "11:00 am"];

  const dates = [
    { day: "Mon", date: "23" },
    { day: "Tue", date: "24" },
    { day: "Wed", date: "25" },
    { day: "Thu", date: "26" },
    { day: "Fri", date: "27" },
    { day: "Sat", date: "28" },
    { day: "Sun", date: "29" },
  ];

  const doctors = [
    {
      name: "Sara Graham",
      specialization: "Cardiologist",
      experience: "12",
      address: "USA, San Fransisco, Califonia, 2Km",
      distance: "Distance 2.7 km",
      rating: "4.23(425)",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "James Anderson",
      specialization: "Cardiologist",
      experience: "12",
      address: "USA, San Fransisco, Califonia, 2Km",
      distance: "2.7 km",
      rating: "4.23(425)",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
  ];

  return (
    <>
      {_.map(doctors, (doctor, id) => (
        <div key={id} className="mt-4">
          <CommonCard>
            <div className="row">
              <div className="col-md-3 d-flex flex-column align-items-center justify-content-between">
                <img
                  src={doctor.image}
                  alt="Profile Image"
                  height="275px"
                  width="215px"
                  className="rounded"
                />
                <small className="text-primary" onClick={() => setShowProfile(!showProfile)}>
                  View Profile
                </small>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-around">
                <h4 className="fw-bold">Dr. {doctor.name}</h4>
                <small className="text-muted">{doctor.specialization}</small>
                <small className="text-muted">{doctor.experience} Years Experience Overall </small>
                <h6 className="fw-bold">{doctor.address}</h6>
                <small className="text-muted">Distance {doctor.distance} </small>
                <span>
                  <StarFill size="20" color="#FFCC00" />{" "}
                  <small className="text-muted">{doctor.rating}</small>{" "}
                </span>
                <button className="btn btn-sm btn-outline-warning">Request for Appointment</button>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-between">
                <div className="d-flex border-bottom pb-1">
                  <div className="d-flex align-items-center">
                    <small>All Appointments</small>
                    <small className="mx-3">In Person</small>
                    <small>
                      <CameraVideoFill size="20" className="text-primary" /> Video Call
                    </small>
                  </div>
                  <Dropdown className="ms-auto">
                    <Dropdown.Toggle variant="outline" className="text-primary" id="dropdown-basic">
                      This week <ChevronDown size="20" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="border-bottom py-2">
                  <div className="d-flex">
                    <p>
                      <span className="fw-bold">23 May,</span>{" "}
                      <span className="text-muted">Sunday</span>
                    </p>
                    <div className="ms-auto d-flex">
                      <ChevronLeft size="20" />
                      <ChevronRight size="20" className="mx-3" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    {_.map(dates, (item, id) => (
                      <div
                        key={id}
                        className="d-flex flex-column justify-content-between align-items-center"
                      >
                        <small>{item.day}</small>
                        <small>{item.date}</small>
                      </div>
                    ))}
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
                    <small
                      className="text-primary cr-p"
                      onClick={() => {
                        setDoctor(doctor);
                        setShow(true);
                      }}
                    >
                      View All Availabiltiy
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {showProfile ? (
              <div className="mt-4 d-flex flex-column">
                <div className="d-flex border-bottom border-2 mb-3">
                  <h6 className="m-0 border-primary border-bottom border-2">Biography</h6>
                  <h6 className="mx-3">Skills</h6>
                  <h6 className="m-0">Contact Information</h6>
                </div>
                <small className="text-muted">
                  George A. Sample, MD, FCCP, is a graduate of George Washington University Medical
                  School. He trained in internal medicine at the University of Oregon Health
                  Sciences (UOHS) and pulmonary critical care medicine at UOHS and the University of
                  Southern California. Sample has been practicing since 1976, the last 12 years in
                  Washington, D.C., at the Washington Hospital Center, selected as one of the top
                  100 hospitals in the United States. Sample's practice specializes in the care of
                  critically.
                </small>
                <small className="mt-3">Read More</small>
                <div className="border-top mt-4 pt-3">
                  <h6>Patient Review</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-md-1 text-center">
                      <ChevronWithCircleLeft size="40" />
                    </div>
                    <div className="col-md-5">
                      <CommonCard>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            alt="Patient Photo"
                            height="95px"
                            width="95px"
                            className="rounded"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h6 className="fw-bold mb-1">William Oliver</h6>
                            <h6 className="text-muted">
                              “Excellent visit. This was for a second opinion and an attempt to
                              see.”
                            </h6>
                          </div>
                        </div>
                      </CommonCard>
                    </div>
                    <div className="col-md-5">
                      <CommonCard>
                        <div className="d-flex align-items-center">
                          <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            alt="Patient Photo"
                            height="95px"
                            width="95px"
                            className="rounded"
                          />
                          <div className="d-flex flex-column ms-2">
                            <h6 className="fw-bold mb-1">William Oliver</h6>
                            <h6 className="text-muted">
                              “Excellent visit. This was for a second opinion and an attempt to
                              see.”
                            </h6>
                          </div>
                        </div>
                      </CommonCard>
                    </div>
                    <div className="col-md-1 text-center">
                      <ChevronWithCircleRight size="40" />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </CommonCard>
        </div>
      ))}

      {show ? (
        <CommonModal show={show} onHide={() => setShowProfile(false)} centered={true}>
          <Modal.Body>
            <div className="d-flex border-bottom py-3 align-items-center">
              <img
                src={doctor.image}
                alt="Profile Image"
                height="108px"
                width="86px"
                className="rounded"
              />
              <div className="d-flex flex-column justify-content-between mx-2">
                <small className="fw-bold">{doctor.name}</small>
                <small className="m-0 text-muted">{doctor.specialization}</small>
                <small className="m-0 text-muted">{doctor.experience}</small>
                <small className="m-0 fw-bold">{doctor.address}</small>
              </div>
              <div className="d-flex flex-column">
                <small>
                  <CameraVideoFill size="20" className="text-primary" /> Visit
                </small>
                <div className="d-flex">
                  <small>
                    <span className="fw-bold">23 May,</span>{" "}
                    <span className="text-muted">Sunday</span>
                  </small>
                  <div className="ms-auto d-flex">
                    <ChevronLeft size="20" />
                    <ChevronRight size="20" className="mx-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end my-4">
              <div>
                <InputGroup className="border px-2 d-flex align-items-center">
                  <Form.Control placeholder="date" className="border-0" />
                  <InputGroup.Append>
                    <Calendar size="20" />
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
            <div>
              <h6>May 23 Sunday</h6>
              <div className="row g-2">
                {_.map(timings, (time, id) => (
                  <div key={id} className="col-3">
                    <div className="border p-2 rounded me-2">
                      <small>{time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="d-flex bg-light justify-content-start">
            <button className="btn btn-sm" onClick={() => setShow(false)}>
              Cancel
            </button>
            <button
              className="btn btn-sm btn-primary text-white mx-2"
              onClick={() => setShow(false)}
            >
              Next
            </button>
          </Modal.Footer>
        </CommonModal>
      ) : null}
    </>
  );
};

export default DoctorCard;
