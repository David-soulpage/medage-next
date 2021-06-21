// react
import React, { FC, useState } from "react";
//icons
import { ChevronUpCircle, ChevronDownCircle } from "components/styled-icons";

const PatientDetailsSmall: FC = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="d-flex border-bottom py-3 align-items-center">
        <h6 className="title m-0">Patient Details</h6>
        {show ? (
          <ChevronUpCircle size="20" className="ms-auto cr-p" onClick={toggle} />
        ) : (
          <ChevronDownCircle size="20" className="ms-auto cr-p" onClick={toggle} />
        )}
      </div>
      {show ? (
        <div className="d-flex flex-column flex-lg-row mt-4 align-items-center align-items-lg-start">
          {/* Profile Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
              alt="Profile Image"
              height="150px"
              width="120px"
              className="rounded img-fit"
            />
            <p className="m-0 rounded text-center mt-3">JA-09821</p>
          </div>
          {/* Profile Details */}
          <div className="mx-3 w-100">
            <div className="row gy-1">
              <div className="col-3">
                <small className="fw-bold m-0">David Nirmal</small>
              </div>
              <div className="col-9">
                <small className="m-0">Something</small>
              </div>
              <div className="col-3">
                <small className="fw-bold m-0">Phone:</small>
              </div>
              <div className="col-9">
                <small className="m-0">040-978102718</small>
              </div>
              <div className="col-3">
                <small className="fw-bold m-0">Address:</small>
              </div>
              <div className="col-9">
                <small className="m-0">10000 W Maude Ave Sunny vale ,CA 99897</small>
              </div>
            </div>
          </div>
          {/* Appointment Details */}
          <div className="w-100 mt-4 mt-lg-0">
            <div className="row gy-3">
              <div className="col-3">
                <small className="fw-bold m-0">CDS:</small>
              </div>
              <div className="col-9">
                <button className="btn btn-sm text-primary bg-light-primary fw-bold m-1">
                  <small>Diabetic Eye Exam</small>
                </button>
                <button className="btn btn-sm text-primary bg-light-primary fw-bold m-1">
                  <small>Diabetic Eye Exam</small>
                </button>
                <button className="btn btn-sm text-primary bg-light-primary fw-bold m-1">
                  <small>Diabetic Eye Exam</small>
                </button>
              </div>
              <div className="col-3">
                <small className="fw-bold m-0">Care Team:</small>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PatientDetailsSmall;
