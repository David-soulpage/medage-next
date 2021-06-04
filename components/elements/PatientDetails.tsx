// react
import React, { FC } from "react";
//router
import { useRouter } from "next/router";

const PatientDetails: FC = () => {
  const router = useRouter();
  return (
    <div>
      <h6 className="title m-0">Patient Details</h6>
      <div className="d-flex flex-column flex-lg-row mt-4 align-items-center align-items-lg-start">
        {/* Profile Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
            alt="Profile Image"
            height="150px"
            width="120px"
            className="rounded"
          />
          <p className="m-0 rounded sub-title text-center mt-3">JA-09821</p>
        </div>
        {/* Profile Details */}
        <div className="mx-3 w-100">
          <div className="row gy-1">
            <div className="col-4">
              <small className="fw-bold m-0">David Nirmal</small>
            </div>
            <div className="col-8">
              <small className=" m-0">Something</small>
            </div>
            <div className="col-4">
              <small className="fw-bold m-0">Phone:</small>
            </div>
            <div className="col-8">
              <small className=" m-0">040-978102718</small>
            </div>
            <div className="col-4">
              <small className="fw-bold m-0">Address:</small>
            </div>
            <div className="col-8">
              <small className=" m-0">10000 W Maude Ave Sunny vale ,CA 99897</small>
            </div>
            <div className="col-4">
              <small className="fw-bold m-0">CDS:</small>
            </div>
            <div className="col-8">
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
          </div>
        </div>
        {/* Appointment Details */}
        <div className="w-100 mt-4 mt-lg-0">
          <div className="row gy-3">
            <div className="col-6">
              <small className="fw-bold m-0">Date Added:</small>
            </div>
            <div className="col-6">
              <small className=" m-0">April 6, 2021</small>
            </div>
            <div className="col-6">
              <small className="fw-bold m-0">Last Shcedule Appointment:</small>
            </div>
            <div className="col-6">
              <small className=" m-0">Mon Aug 6, 2020</small>
            </div>
            <div className="col-6">
              <small className="fw-bold m-0">Next Shcedule Appointment</small>
            </div>
            <div className="col-6">
              <small className=" m-0">_ _ _ _</small>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Options */}
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex">
          <button className="btn btn-sm btn-outline-dark text-muted">New Referral</button>
          <button className="btn btn-sm btn-outline-dark text-muted mx-4">Fax Demographics</button>
          <button className="btn btn-sm btn-outline-dark text-muted">Print Demographics</button>
        </div>
        <button
          className="btn btn-sm btn-primary text-white"
          onClick={() => router.push("/doctor/1/create-appointment")}
        >
          Schedule a New Appointment
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
