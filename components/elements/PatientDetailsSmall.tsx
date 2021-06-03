import React, { FC } from "react";

const PatientDetailsSmall: FC = () => {
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
          <p className="m-0 rounded text-center mt-3">JA-09821</p>
        </div>
        {/* Profile Details */}
        <div className="mx-3 w-100">
          <div className="row gy-3">
            <div className="col-3">
              <h6 className="fw-bold m-0">David Nirmal</h6>
            </div>
            <div className="col-9">
              <h6 className="m-0">Something</h6>
            </div>
            <div className="col-3">
              <h6 className="fw-bold m-0">Phone:</h6>
            </div>
            <div className="col-9">
              <h6 className="m-0">040-978102718</h6>
            </div>
            <div className="col-3">
              <h6 className="fw-bold m-0">Address:</h6>
            </div>
            <div className="col-9">
              <h6 className="m-0">10000 W Maude Ave Sunny vale ,CA 99897</h6>
            </div>
          </div>
        </div>
        {/* Appointment Details */}
        <div className="w-100 mt-4 mt-lg-0">
          <div className="row gy-3">
            <div className="col-2">
              <h6 className="fw-bold m-0">CDS:</h6>
            </div>
            <div className="col-10">
              <button className="btn text-primary bg-light-primary fw-bold m-1">
                Diabetic Eye Exam
              </button>
              <button className="btn text-primary bg-light-primary fw-bold m-1">
                Diabetic Foot Exam
              </button>
              <button className="btn text-primary bg-light-primary fw-bold m-1">
                Adult Immunization Schedule Age: 28-49
              </button>
            </div>
            <div className="col-2">
              <h6 className="fw-bold m-0">Care Team:</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsSmall;
